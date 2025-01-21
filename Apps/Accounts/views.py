from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Apps.Accounts.models.User import User
from Apps.Accounts.serializers import UserSerializer
from rest_framework.permissions import AllowAny


class RegisterUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "Usuario registrado con éxito."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
