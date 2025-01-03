from django.db import models
from django.contrib.auth.models import AbstractUser

# Modelo abstracto para auditoría
class Audit(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    last_access_at = models.DateTimeField(null=True, blank=True)
    last_password_change_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True

class User(AbstractUser, Audit):
    last_name = models.CharField(max_length=30, null=True, blank=True)
    first_name = models.CharField(max_length=30, null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(max_length=255, unique=True)
    
