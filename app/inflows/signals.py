from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Inflow

@receiver(post_save, sender=Inflow)
def update_item_quantity(sender, instance, **kwargs):
    if instance.quantity > 0:
        item = instance.item
        item.quantity += instance.quantity
        item.save()