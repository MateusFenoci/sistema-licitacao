from django.contrib import admin
from . import models

class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description',)
    search_fields = ('name',)

class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'product_class', 'description',)
    search_fields = ('name', 'product_class')

admin.site.register(models.ServiceCategory, ServiceCategoryAdmin)
admin.site.register(models.Item, ItemAdmin)