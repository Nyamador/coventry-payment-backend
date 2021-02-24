from django.db import models

import uuid

class Transaction(models.Model):
    public_id = models.UUIDField(default=uuid.uuid4, editable=False)
    external_id = models.CharField("External ID", max_length=100)
    currency = models.CharField("Currency", max_length=5, default="GHC")
    amount = models.DecimalField("Amount", decimal_places=2, max_digits=100, default=5.00)
    customer_name = models.CharField("Customer ID", max_length=250)
    customer_email = models.EmailField("Customer Email", max_length=250)
    description = models.CharField("Transaction Description", max_length=500)
    payment_method = models.CharField("Payment Method", max_length=10)
    date_created = models.DateField("Date Created", auto_now_add=True)


    def __str__(self):
        return self.id


class Refund(models.Model):
    pass
