import json
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from payment.models import Transaction, Otp, Link
from payment.serializers import OTPSerializer, TransactionSerializer, LinkSerializer
from users.Token import PublicKeyToken

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


    def list(self, request):
        queryset = Transaction.objects.filter(user=request.user.id)
        serializer = TransactionSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        transaction = Transaction.objects.create(
            user = request.user.id,
            amount = request.data["amount"],
            customer_name = request.data["customer"]["name"],
            customer_email = request.data["customer"]["email"],
            customer_mobile = request.data["customer"]["mobile"],
        )
        transaction.save()
        serializer = TransactionSerializer(transaction)
        return Response(serializer.data)


class OTPViewSet(viewsets.ModelViewSet):
    """
        OTP ViewSet
    """
    serializer_class = OTPSerializer
    queryset = Otp.objects.all()


class LinkViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    serializer_class = LinkSerializer
    queryset = Link.objects.all()

    def list(self, request):
        queryset = Link.objects.all()
        serializer = LinkSerializer(queryset)
        return Response(serializer.data)

    def create(self, request):
        link = Link.objects.create(
            user=request.user,
            amount=request.data["amount"],
            customer_name=request.data["customer_name"],
            customer_email=request.data["customer_email"],
            customer_mobile=request.data["customer_mobile"]
            )
        link.save()
        serializer = LinkSerializer(link)
        return Response(serializer.data)
