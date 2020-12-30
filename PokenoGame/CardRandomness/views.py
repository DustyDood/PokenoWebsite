from django.shortcuts import render, redirect, get_object_or_404, HttpResponse
from .models import Cards


# Create your views here.
def hello(request):
    # So, calling this HttpResponse is enough to actually return something.
    # This means that our pathway is clear, but our response is lacking.
    return HttpResponse('Hello, World!')


def home(request):
    cards = Cards.objects.all()
    return render(request, "CardRandomness/home.html", {'cards': cards})


