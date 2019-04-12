from django.shortcuts import render

def index(request):
    return render(request, 'index/index.html')

def contact(request):
    return render(request, 'contact.html')

def sponsers(request):
    return render(request, 'sponsers.html')