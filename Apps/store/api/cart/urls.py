from django.urls import path

from Apps.store.api import CartListView

urlpatterns = [
    path('list/', CartListView.as_view(), name='list_carts'),
]
