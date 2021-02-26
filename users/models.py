from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import CoventryUserManager


class CoventryUser(AbstractUser):

    email = models.EmailField(
        verbose_name="Email Adddress", max_length=255, unique=True
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CoventryUserManager()

    def __str__(self):
        return self.email


class Customer(models.Model):
    firstname = models.CharField("Firstname", max_length=100)
    lastname = models.CharField("Lastname", max_length=150)
    email = models.EmailField("Email Address")
    mobile = models.CharField("Mobile Number", max_length=20)

    def __str__(self):
        return self.firstname + self.lastname