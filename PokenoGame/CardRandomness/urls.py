from django.urls import path
from . import views

urlpatterns = [
    path('', views.testing, name='home'),
    path('hello/', views.hello, name='hello'),
    ]