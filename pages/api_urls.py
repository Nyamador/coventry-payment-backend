from django.urls import path
from .views import  TransactionViewSet, OTPViewSet, LinkViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('transactions', TransactionViewSet, basename="Transaction")
router.register('otps', OTPViewSet, basename="otp")
router.register('links', LinkViewSet, basename="link")
urlpatterns = router.urls