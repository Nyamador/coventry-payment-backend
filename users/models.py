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

