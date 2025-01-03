from django.urls import path
from Apps.Accounts.views import UserListView

app_name = 'accounts'
urlpatterns = []

urlpatterns += [
    path('api/register', UserListView.as_view(), name='register'),
]