from django.shortcuts import render
from points.models import add_point

def index(request):
    points = add_point.objects.all()
    lenisters_p = 0
    baratheons_p = 0
    targaryens_p = 0
    starks_p = 0
    lenister = [90]
    baratheon = [75]
    targaryen = [45]
    stark = [-40]
    for point in points:
        lenister.append(point.lenisters)
        baratheon.append(point.baratheons)
        targaryen.append(point.targaryens)
        stark.append(point.starks)

    
    for p in lenister:
        lenisters_p += p


    for p in baratheon:
        baratheons_p += p


    for p in targaryen:
        targaryens_p += p
        
    for p in stark:
        starks_p += p

    pointss = {'Lenisters': lenisters_p, 'Baratheons': baratheons_p, 'Targaryens': targaryens_p, 'Starks': starks_p}
    rank = sorted(pointss, key = lambda x : x[1])
    
    context = {
        'points': pointss,
        'lenisters':lenisters_p,
        'baratheons':baratheons_p,
        'targaryens':targaryens_p,
        'starks':starks_p,
    }
    return render(request, 'index/index.html', context)

def contact(request):
    return render(request, 'contact.html')

def sponsers(request):
    return render(request, 'sponsers.html')