from django.urls import path

from Apps.store.api import RegisterOrderView, ListOrdersView

urlpatterns = [
    path('register/', RegisterOrderView.as_view(), name='register_order'),
    path('list/', ListOrdersView.as_view(), name='list_orders'),
]
