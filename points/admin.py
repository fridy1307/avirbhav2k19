from django.contrib import admin
from .models import event_category, point, add_point

# Register your models here.
admin.site.register(event_category)
admin.site.register(point)
admin.site.register(add_point)