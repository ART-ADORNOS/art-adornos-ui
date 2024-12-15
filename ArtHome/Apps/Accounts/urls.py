from django.urls import path
from .views import RegisterClientAPIView, RegisterSellerAPIView

app_name = 'accounts'

urlpatterns = [
    path('api/register/client/', RegisterClientAPIView.as_view(), name='register_client'),
    path('api/register/seller/', RegisterSellerAPIView.as_view(), name='register_seller'),
]