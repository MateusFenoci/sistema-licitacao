from django.db import models

class ServiceCategory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name
    
class Item(models.Model):
    name = models.CharField(max_length=200)
    quantity = models.IntegerField(default=0)
    product_class = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ['name', 'product_class']

    def __str__(self):
        return f"{self.name} - {self.product_class}"