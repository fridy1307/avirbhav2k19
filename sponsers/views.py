from django.shortcuts import render
#from django.core.mail import send_mail

# Create your views here.
def index(request):
    return render(request, 'sponsers.html')

def Sent(request):
    pass