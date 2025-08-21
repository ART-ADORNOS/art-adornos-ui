from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from Apps.store.serializer import OrderSerializer, OrderItemInputSerializer


class RegisterOrderView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = OrderItemInputSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)

        order_serializer = OrderSerializer(context={'request': request})
        order = order_serializer.create(serializer.validated_data)
        return Response({"message": "Orden creada correctamente", "order_id": order.id}, status=status.HTTP_201_CREATED)
