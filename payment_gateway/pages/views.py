from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from payment.models import Transaction, Otp, Link
from payment.serializers import OTPSerializer, TransactionSerializer, LinkSerializer

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

def PaymentView(request, uuid):
    try:
        link = Link.objects.get(uuid=uuid)
        context = {
            'link_data' : link
        }
    except Link.DoesNotExist:
        print("ssd")
    return render(request, 'pages/index.html')

def errorview(request):
    return render(request, 'pages/index.html')


class TransactionViewSet(viewsets.ModelViewSet):
    """
        Transaction ViewSet
    """
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()


class OTPViewSet(viewsets.ModelViewSet):
    """
        OTP ViewSet
    """
    serializer_class = OTPSerializer
    queryset = Otp.objects.all()


class LinkViewSet(viewsets.ModelViewSet):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()