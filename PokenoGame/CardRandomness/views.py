from django.shortcuts import render, redirect, get_object_or_404, HttpResponse


# Create your views here.
def home(request):
    # So, calling this HttpResponse is enough to actually return something.
    # This means that our pathway is clear, but our response is lacking.
    return HttpResponse('Hello, World!')


def testing(request):
    context = {}
    return render(request, "Templates/home.html", context)


