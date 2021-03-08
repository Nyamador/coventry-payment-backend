from django.urls import path
from . import views


urlpatterns = [
    path('otp', views.OTPListCreate.as_view(), name='create_otp'),
    # path('otp/verify', views.VerifyOTP, name='verify_otp'),
    #Links
    path('paymentlink', views.PaymentLinkCreation.as_view(), name='create_paymentlink'),
    # Transactions
    path('transactions', views.TransactionList.as_view(), name='list_transactions'),
    path('transaction/new', views.TransactionCreation.as_view(), name='create_transaction'),
]