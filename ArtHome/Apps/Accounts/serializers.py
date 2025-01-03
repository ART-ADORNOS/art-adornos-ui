from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from Apps.Accounts.models import User


class RegisterUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])
    password_confirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'username', 'password', 'password_confirm', 'email', 
            'first_name', 'last_name', 'birth_date', 'phone_number'
        ]

    def validate(self, attrs):
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password_confirm')  # Remover la confirmación
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            birth_date=validated_data.get('birth_date', None),
            phone_number=validated_data.get('phone_number', None)
        )
        return user
    
