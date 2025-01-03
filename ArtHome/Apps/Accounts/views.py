from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RegisterUserSerializer
from Apps.Accounts.models import User
from rest_framework import status



class UserListView(APIView):
    def post(self, request):
        data = request.data
        if data['password'] != data['password_confirm']:
            return Response({"message": "Las contraseñas no coinciden."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.create_user(
                username=data['username'],
                password=data['password'],
                email=data['email'],
                first_name=data['first_name'],
                last_name=data['last_name'],
                birth_date=data.get('birth_date'),
                phone_number=data.get('phone_number'),
            )
            return Response({"message": "Usuario registrado con éxito."}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)