from django.contrib import admin
from django.urls import path, include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.index, name='points'),
    
    path('table', views.pointstable, name='pointstable'),
]
urlpatterns += staticfiles_urlpatterns()