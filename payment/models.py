from django.db import models
from payment_gateway import settings
from payment_gateway.utils import random_string_gen
import uuid

class Transaction(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    public_id = models.UUIDField(default=uuid.uuid4, editable=False)
    external_id = models.CharField("External ID", max_length=100)
    currency = models.CharField("Currency", max_length=5, default="GHC")
    amount = models.DecimalField("Amount", decimal_places=2, max_digits=100, default=5.00)
    customer_name = models.CharField("Customer ID", max_length=250)
    customer_email = models.EmailField("Customer Email", max_length=250)
    customer_mobile = models.CharField("Customer Mobile", max_length=10)
    description = models.CharField("Transaction Description", max_length=500)
    payment_method = models.CharField("Payment Method", max_length=10)
    date_created = models.DateField("Date Created", auto_now_add=True)


    def __str__(self):
        return self.id

class Otp(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    reference = models.UUIDField(default=uuid.uuid4, editable=False)
    value = models.CharField("OTP Value", default=random_string_gen)
    expiry = models.PositiveSmallIntegerField("Expiry in Minutes", default=5)
    date_created = models.DateField("Date Created", auto_now_add=True)

    def __str__(self):
        return self.reference


class Link(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_created = models.DateField("Date Created", auto_now_add=True)

    def __str__(self):
        return self.id