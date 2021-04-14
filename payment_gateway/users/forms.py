from allauth.account.forms import SignupForm
from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CoventryUser


class CoventryUserCreationForm(UserCreationForm):

    class Meta:
        model = CoventryUser
        fields = ('email',)


# class CoventrySignUpForm(SignupForm):
#     """
#     Overriding AllAuth's SignupForm to add an option for telephone number
#     """

#     def __init__(self, *args, **kwargs):
#         super(CoventrySignUpForm, self).__init__(*args, **kwargs)
#         self.fields['firstname'] = forms.CharField(required=True)
#         self.fields['lastname'] = forms.CharField(required=True)

#     def save(self, request):
#         user = super(CoventrySignUpForm, self).save(request)
#         return user


class CoventryUserChangeForm(UserChangeForm):

    class Meta:
        model = CoventryUser
        # fields = UserChangeForm.Meta.fields
        fields = ('email',)