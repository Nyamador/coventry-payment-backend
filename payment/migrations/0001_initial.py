# Generated by Django 3.1.7 on 2021-02-23 14:12

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Refund',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('public_id', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('external_id', models.CharField(max_length=100, verbose_name='External ID')),
                ('currency', models.CharField(default='GHC', max_length=5, verbose_name='Currency')),
                ('amount', models.DecimalField(decimal_places=2, default=5.0, max_digits=100, verbose_name='Amount')),
                ('customer_name', models.CharField(max_length=250, verbose_name='Customer ID')),
                ('customer_email', models.EmailField(max_length=250, verbose_name='Customer Email')),
                ('description', models.CharField(max_length=500, verbose_name='Transaction Description')),
                ('payment_method', models.CharField(max_length=10, verbose_name='Payment Method')),
                ('date_created', models.DateField(auto_now_add=True, verbose_name='Date Created')),
            ],
        ),
    ]