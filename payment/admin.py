from django.contrib import admin
from .models import Transaction, Link, Otp

# Register your models here.
admin.site.register(Transaction)
admin.site.register(Link)
admin.site.register(Otp)
