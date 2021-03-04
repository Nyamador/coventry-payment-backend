from django.urls import path
from . import views


urlpatterns = [
    path('otp', views.CreateOTP, name='create_otp'),
    path('otp/verify', views.VerifyOTP, name='verify_otp'),
]