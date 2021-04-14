from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name="home"),
    path('pay/<uuid:uuid>', views.PaymentView, name="payment_view"),
    path('api/v1/', include('pages.api_urls')),
]