from rest_framework import serializers

from ...models import Order, OrderItem, Startup, Product
from ...utilities.enums.order_status import OrderStatus


class OrderItemInputSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField(write_only=True)
    product = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['product', 'product_id', 'quantity', 'price']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemInputSerializer(many=True, write_only=True)
    startup_name = serializers.CharField(write_only=True)
    startup = serializers.PrimaryKeyRelatedField(read_only=True)
    total_amount = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    status = serializers.CharField(read_only=True)

    class Meta:
        model = Order
        fields = ["id", "cart", "startup", "startup_name", "total_amount", "status", "items"]

    def create(self, validated_data):
        request = self.context.get('request')
        items_data = validated_data.pop('items', [])

        startup_name = validated_data.pop("startup_name")
        validated_data["startup"] = Startup.objects.get(name=startup_name)

        for item in items_data:
            item["product"] = Product.objects.get(id=item.pop("product_id"))

        validated_data["total_amount"] = sum(item['quantity'] * item['price'] for item in items_data)
        validated_data["status"] = OrderStatus.PENDING

        order = Order.objects.create(customer=request.user, **validated_data)

        for item in items_data:
            OrderItem.objects.create(order=order, **item)

        return order
