from rest_framework import serializers
from Apps.store.models import Product


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=True)

    class Meta:
        model = Product
        fields = ['id', 'start_up', 'name', 'description', 'image', 'category', 'price', 'stock']
