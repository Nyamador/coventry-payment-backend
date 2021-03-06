from django.conf import settings
from django.contrib.auth.models import AbstractUser
from payment_gateway import settings
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
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
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    firstname = models.CharField("Firstname", max_length=100)
    lastname = models.CharField("Lastname", max_length=150)
    email = models.EmailField("Email Address")
    mobile = models.CharField("Mobile Number", max_length=20)

    def __str__(self):
        return self.firstname + self.lastname


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
