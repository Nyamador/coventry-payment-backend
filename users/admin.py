from django.contrib import admin
from django.conf import settings
from django.contrib.auth.admin import UserAdmin


from .forms import CoventryUserChangeForm, CoventryUserCreationForm
from .models import CoventryUser, Customer


class CoventryUserAdmin(UserAdmin):
    model = CoventryUser
    add_form = CoventryUserCreationForm
    form = CoventryUserChangeForm


admin.site.register(CoventryUser, CoventryUserAdmin)
admin.site.register(Customer)