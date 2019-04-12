from django.shortcuts import render
from .models import event_category, point

# Create your views here.
def index(request):
    pass

def pointstable(request):
    event_details = event_category.objects.all()
    points = []
    for i in range(len(event_details)+1):
        points.append(point.objects.filter(event_id = i+1))
    dic = {}
    for i in range(len(event_details)+1):
        event_details[i]
        for j in range(len(points[i])):
            points[i][j]
    context = {
        'length': len(event_details),
        'event_details' : event_details,
        'points': points,
    }
    return render(request, 'points/pointstable.html', context)