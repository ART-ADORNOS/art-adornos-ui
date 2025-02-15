from django.urls import path
from Apps.store.views import RegisterStartupView

app_name = 'store'
urlpatterns = []

urlpatterns += [
    path('startups/register/', RegisterStartupView.as_view(), name='register_startup'),
]
