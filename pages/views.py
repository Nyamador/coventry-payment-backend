from django.shortcuts import render
from rest_framework import generics

from payment.serializers import OTPSerializer

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

class CreateOTP(generics.CreateAPIView):
    serializer_class = OTPSerializer

def VerifyOTP():
    pass