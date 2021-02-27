from rest_framework import serializers
from .models import Transaction, Otp, Link

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['public_id', 'external_id', 'amount']


class OTPSerializer(serializers.ModelSerializer):
    class Meta:
        model = Otp
        fields = ['reference', 'value', 'expiry', 'date_created']


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ['uuid', 'date_created']