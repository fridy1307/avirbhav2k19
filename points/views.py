from django.shortcuts import render
from .models import event_category, point, add_point

# Create your views here.
def index(request):
    pass

def pointstable(request):
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

    context = {
        'points': points,
        'lenisters':lenisters_p,
        'baratheons':baratheons_p,
        'targaryens':targaryens_p,
        'starks':starks_p,
    }
    return render(request, 'points/pointstable.html', context)