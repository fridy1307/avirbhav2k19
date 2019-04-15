from django.shortcuts import render
from .models import egg_drop_item_list

def index(request):
    return render(request, 'events/index.html')

def Craft(request):
    return render(request, 'events/Craft/index.html')

def pubg(request):
    return render(request, 'events/Online Gaming/index.html')

def rampwalk(request):
    return render(request, 'events/Ramp Walk/index.html')

def literary(request):
    return render(request, 'events/Literary/literary1.html')

def technical(request):
    return render(request, 'events/technical/index.html')

def base2(request):
    return render(request, 'base2.html')

def castle(request):
    return render(request, 'events/Craft/castle1.html')

def egg_drop(request):
    list = egg_drop_item_list.objects.all()
    context = {
        'list':list,
    }
    return render(request, "events/eggdrop/index.html", context)