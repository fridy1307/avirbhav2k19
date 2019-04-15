from django.shortcuts import render
#from django.core.mail import send_mail
from .models import sponser

# Create your views here.
def index(request):
    sponsers = sponser.objects.all()
    context = {
        'sponsers':sponsers,
    }
    return render(request, 'sponsers.html')
