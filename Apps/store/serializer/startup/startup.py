from rest_framework import serializers
from Apps.store.models import Startup


class StartupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Startup
        fields = ['owner', 'name', 'description', 'industry',
                  'is_active', 'slug']

    def create(self, validated_data):
        return Startup.objects.create(**validated_data)