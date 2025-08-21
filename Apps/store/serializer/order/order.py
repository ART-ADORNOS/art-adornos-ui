from rest_framework import serializers

from ...models import Order, OrderItem
from ...utilities.enums.order_status import OrderStatus


class OrderItemInputSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    cart = serializers.IntegerField()
    product = serializers.CharField()
    quantity = serializers.IntegerField()
    product_id = serializers.IntegerField()
    name_startup = serializers.CharField()
    phone_owner = serializers.CharField()
    image_product = serializers.CharField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)


class OrderSerializer(serializers.Serializer):
    # vamos a usar este serializer con many=True
    # así DRF sabe que esperamos una lista de items
    def create(self, validated_data):
        request = self.context['request']

        items_data = validated_data

        if not items_data:
            raise serializers.ValidationError("No se recibieron items para la orden.")

        cart_id = items_data[0]['cart']
        startup_name = items_data[0]['name_startup']
        total_amount = sum(item['quantity'] * item['price'] for item in items_data)

        from Apps.store.models import Startup
        startup = Startup.objects.get(name=startup_name)

        order = Order.objects.create(
            customer=request.user,
            cart_id=cart_id,
            startup=startup,
            total_amount=total_amount,
            status=OrderStatus.PENDING
        )

        for item in items_data:
            OrderItem.objects.create(
                order=order,
                product_id=item['product_id'],
                quantity=item['quantity'],
                price=item['price']
            )

        return order
