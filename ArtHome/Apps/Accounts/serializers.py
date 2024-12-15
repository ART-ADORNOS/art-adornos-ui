from rest_framework import serializers
from Apps.Accounts.models import User, AdminProfile, NormalUserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'role')
        read_only_fields = ('id', 'username', 'email', 'role')
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data['role'],
            birth_date=validated_data.get('birth_date'),
            phone_number=validated_data.get('phone_number')
        )
        return user
    
    
class AdminProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminProfile
        fields = ['access_level']

# Serializador para el perfil de usuarios normales (clientes)
class NormalUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = NormalUserProfile
        fields = ['loyalty_points']