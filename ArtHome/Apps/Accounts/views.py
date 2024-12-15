from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer, AdminProfileSerializer, NormalUserProfileSerializer

# Create your views here.
class RegisterClientAPIView(APIView):
    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save(role='normal')  # Establecer el rol como cliente
            profile_serializer = NormalUserProfileSerializer(data=request.data)
            if profile_serializer.is_valid():
                profile_serializer.save(user=user)  # Asociar perfil al usuario
                return Response({"message": "Cliente registrado con éxito"}, status=status.HTTP_201_CREATED)
            user.delete()  # Si el perfil falla, elimina el usuario
            return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class RegisterSellerAPIView(APIView):
    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save(role='admin')  # Establecer el rol como vendedor
            profile_serializer = AdminProfileSerializer(data=request.data)
            if profile_serializer.is_valid():
                profile_serializer.save(user=user)  # Asociar perfil al usuario
                return Response({"message": "Vendedor registrado con éxito"}, status=status.HTTP_201_CREATED)
            user.delete()  # Si el perfil falla, elimina el usuario
            return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)