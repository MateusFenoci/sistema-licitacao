from django.contrib import admin, messages
from .models import Outflow

class OutflowAdmin(admin.ModelAdmin):
    list_display = ('item', 'quantity', 'car', 'created_at')
    search_fields = ('item__name', 'item__product_class', 'description')
    list_filter = ('item', 'created_at')

    def save_model(self, request, obj, form, change):
            if obj.quantity > obj.item.quantity:
                self.message_user(
                    request,
                    f"The outflow quantity ({obj.quantity}) exceeds the available item quantity ({obj.item.quantity}).",
                    level=messages.WARNING
                )
            else:
                super().save_model(request, obj, form, change)

admin.site.register(Outflow, OutflowAdmin)