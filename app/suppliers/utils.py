from django.core.exceptions import ValidationError

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
