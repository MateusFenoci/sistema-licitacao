# Generated by Django 5.1.2 on 2024-10-30 00:00

import django.core.validators
import suppliers.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Supplier',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('cnpj_cpf', models.CharField(max_length=18, unique=True, validators=[django.core.validators.RegexValidator(message='O campo deve estar no formato CPF (000.000.000-00) ou CNPJ (00.000.000/0000-00).', regex='^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$|^\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}$'), suppliers.models.validar_cnpj_cpf])),
                ('description', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]
