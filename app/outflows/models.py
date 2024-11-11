from django.db import models
from django.db import models
from shopping.models import Item
from cars.models import Cars

class Outflow(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='outflows')
    car = models.ForeignKey(Cars, on_delete=models.CASCADE, related_name='outflows')
    quantity = models.IntegerField()
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return str(self.item)

