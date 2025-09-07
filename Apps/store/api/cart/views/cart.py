import logging

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from Apps.store.api.cart.serializers.cart import CartSerializerOutput
from Apps.store.models import CartProduct, Cart

logger = logging.getLogger(__name__)


class CartListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            cart = Cart.objects.get(user=request.user)
            cart_products = CartProduct.objects.filter(cart=cart)
            serializer = CartSerializerOutput(cart_products, many=True, context={'request': request})
            logger.info(f"Response data: {serializer.data}")
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(str(e))
            return Response(status=status.HTTP_400_BAD_REQUEST)
