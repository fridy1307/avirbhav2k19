from django.contrib import admin
from django.urls import path, include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.index, name='index'),

    path('events/', include('events.urls')),
    
    path('points/', include('points.urls')),

    path('admin/', admin.site.urls),
    path('sponsers/',include('sponsers.urls'), name='sponsers'),
    path('contact/', views.contact, name='contact'),
    path('auth/', include('django.contrib.auth.urls')),
    path('accounts/', include('accounts.urls')),
]
urlpatterns += staticfiles_urlpatterns()