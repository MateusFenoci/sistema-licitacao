from django.contrib import admin
from . import models

class SupplierAdmin(admin.ModelAdmin):
    list_display = ('name', 'cnpj_cpf', 'description',)
    search_fields = ('name', 'cnpj_cpf',)

admin.site.register(models.Supplier, SupplierAdmin)