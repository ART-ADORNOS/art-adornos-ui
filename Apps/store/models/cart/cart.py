from Apps.store.models import ModelBase
from django.db import models


class Cart(ModelBase):
    user = models.ForeignKey('Accounts.User', on_delete=models.CASCADE, verbose_name='Usuario')
    products = models.ManyToManyField('Product', through='CartProduct', verbose_name='Productos')
    state = models.BooleanField(default=True, verbose_name='Estado')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    def __str__(self):
        return f"Carrito de {self.user.username}"

    class Meta:
        verbose_name = 'Carrito'
        verbose_name_plural = 'Carritos'
        ordering = ['id']


class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1, verbose_name='Cantidad')

    def __str__(self):
        return f"{self.product} x {self.quantity}"

    class Meta:
        verbose_name = 'Producto en Carrito'
        verbose_name_plural = 'Productos en Carrito'
        ordering = ['id']
