from django.urls import path, include
from . import views

urlpatterns = [
    path('pay', views.index, name="home"),
    path('api/v1/', include('pages.api_urls')),
]