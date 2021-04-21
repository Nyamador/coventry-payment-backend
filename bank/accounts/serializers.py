from rest_framework import serializers
from .models import Otp

class OTPSerializer(serializers.ModelSerializer):
    class Meta:
        model = Otp
        fields = ['reference', 'value', 'expiry', 'date_created']-