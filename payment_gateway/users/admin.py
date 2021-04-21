from django.contrib import admin
from django.conf import settings
from django.contrib.auth.admin import UserAdmin
from rest_framework.authtoken.admin import TokenAdmin


from .forms import CoventryUserChangeForm, CoventryUserCreationForm
from .models import CoventryUser, Customer


class CoventryUserAdmin(UserAdmin):
    model = CoventryUser
    add_form = CoventryUserCreationForm
    form = CoventryUserChangeForm


TokenAdmin.raw_id_fields = ['user']

admin.site.register(CoventryUser, CoventryUserAdmin)
admin.site.register(Customer)