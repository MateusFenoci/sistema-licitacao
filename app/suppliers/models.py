from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator

def validar_cnpj_cpf(value):
    value = value.replace(".", "").replace("-", "").replace("/", "")

    if len(value) == 11:
        if not validar_cpf(value):
            raise ValidationError("CPF inválido.")

    elif len(value) == 14:
        if not validar_cnpj(value):
            raise ValidationError("CNPJ inválido.")

    else:
        raise ValidationError("O campo deve conter um CPF ou CNPJ válido.")
    
def validar_cpf(cpf):
    if len(set(cpf)) == 1:
        return False
    soma = sum(int(cpf[i]) * (10 - i) for i in range(9))
    resto = 11 - (soma % 11)
    digito1 = 0 if resto >= 10 else resto
    soma = sum(int(cpf[i]) * (11 - i) for i in range(10))
    resto = 11 - (soma % 11)
    digito2 = 0 if resto >= 10 else resto
    return cpf[-2:] == f"{digito1}{digito2}"

def validar_cnpj(cnpj):
    if len(set(cnpj)) == 1:
        return False
    pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    soma = sum(int(cnpj[i]) * pesos[i] for i in range(12))
    resto = soma % 11
    digito1 = 0 if resto < 2 else 11 - resto
    pesos = [6] + pesos
    soma = sum(int(cnpj[i]) * pesos[i] for i in range(13))
    resto = soma % 11
    digito2 = 0 if resto < 2 else 11 - resto
    return cnpj[-2:] == f"{digito1}{digito2}"

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