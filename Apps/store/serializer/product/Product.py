from rest_framework import serializers
from Apps.store.models import Product


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Product
        fields = ['id', 'start_up', 'name', 'description', 'image', 'category', 'price', 'stock', 'state']
