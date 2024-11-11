from django.contrib import admin
from . import models

class CarsAdmin(admin.ModelAdmin):
    list_display = ('name', 'plate', 'description',)
    search_fields = ('name', 'plate',)

admin.site.register(models.Cars, CarsAdmin)