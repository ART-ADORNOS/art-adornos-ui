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

# Modelo base de usuario personalizado
class User(AbstractUser, Audit):
    ROLE_CHOICES = [
        ('admin', 'Administrator'),
        ('normal', 'Normal User'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='normal')
    birth_date = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.username

# Perfil extendido para administradores
class AdminProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='admin_profile')
    access_level = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"Admin: {self.user.username}"

# Perfil extendido para usuarios normales
class NormalUserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='normal_user_profile')
    loyalty_points = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"User: {self.user.username}"
