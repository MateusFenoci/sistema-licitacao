from django.db import models
from django.core.validators import RegexValidator

class Cars(models.Model):
    name = models.CharField(max_length=200)
    plate = models.CharField(
                max_length=7,
                unique=True,
                validators=[
                    RegexValidator(
                        regex=r'^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$',
                        message="O campo deve estar no formato de placa brasileira (AAA-0000) ou placa Mercosul (AAA0A00)."
                    )
                ]
            )
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['plate']
    
    def __str__(self):
        return f"{self.name} - {self.plate}" 