from rest_framework import serializers
from .models import Transaction, Otp, Link

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        exclude = ['id' ,'user']


class OTPSerializer(serializers.ModelSerializer):
    class Meta:
        model = Otp
        fields = ['reference', 'value', 'expiry', 'date_created']


class LinkSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_absolute_url', read_only=True)
    class Meta:
        model = Link
        fields = ['url', 'date_created']