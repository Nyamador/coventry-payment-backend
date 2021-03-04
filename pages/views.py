from django.shortcuts import render
from rest_framework import generics

from payment.models import Transaction
from payment.serializers import OTPSerializer, TransactionSerializer, LinkSerializer

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

class TransactionList(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class TransactionCreation(generics.CreateAPIView):
    serializer_class = TransactionSerializer

class PaymentLinkCreation(generics.CreateAPIView):
    serializer_class = LinkSerializer

class CreateOTP(generics.CreateAPIView):
    serializer_class = OTPSerializer