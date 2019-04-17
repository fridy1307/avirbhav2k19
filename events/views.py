from django.shortcuts import render, redirect
from .models import egg_drop_item_list, know_your_city, paheli
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

def paheli_fun(request):
    if request.user.is_authenticated:
        paheli_imgs = paheli.objects.all()
        context = {
            'paheli_imgs': paheli_imgs,
        }
        return render(request, 'events/paheli/index.html', context)
    
    else:
        return redirect('/auth/login', next='paheli')
    
def city(request):
    if request.user.is_authenticated:
        city_imgs = know_your_city.objects.all()
        return render(request, 'events/city/index.html', context)
    
    else:
        return redirect('/auth/login', next='city')