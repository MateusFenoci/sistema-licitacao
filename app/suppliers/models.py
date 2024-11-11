from django.db import models
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError
from .utils import validar_cnpj_cpf

class Supplier(models.Model):
    name = models.CharField(max_length=200)
    cnpj_cpf = models.CharField(
                max_length=18,
                unique=True,
                validators=[
                    RegexValidator(
                        regex=r'^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$',
                        message="O campo deve estar no formato CPF (000.000.000-00) ou CNPJ (00.000.000/0000-00)."
                    ),
                    validar_cnpj_cpf
                ]
            )
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name