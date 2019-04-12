from django.contrib import admin
from .models import event_category, point

# Register your models here.
admin.site.register(event_category)
admin.site.register(point)