from django.contrib import admin
from django.urls import path, include
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.index, name='events'),

    path('craft', views.Craft, name='craft'),
    path('craft/castle', TemplateView.as_view(template_name="events/Craft/castle1.html"), name='castle'),
    path('craft/vanity', TemplateView.as_view(template_name="events/Craft/vanity.html"), name='vanity'),
    path('craft/faced', TemplateView.as_view(template_name="events/Craft/faced.html"), name='faced'),
    path('craft/feast', TemplateView.as_view(template_name="events/Craft/feast.html"), name='feast'),
    path('craft/raven', TemplateView.as_view(template_name="events/Craft/raven.html"), name='raven'),
    path('craft/dcrossing', TemplateView.as_view(template_name="events/Craft/dcrossing.html"), name='dcrossing'),
    path('craft/rebirth', TemplateView.as_view(template_name="events/Craft/rebirth.html"), name='rebirth'),
    
    path('dancing', TemplateView.as_view(template_name="events/Dance/index.html"), name='dancing'),
    
    path('singing', TemplateView.as_view(template_name="events/singing/index.html"), name='singing'),
    
    path('stage', TemplateView.as_view(template_name="events/StageCraft/index.html"), name='stage'),
    
    path('informal', TemplateView.as_view(template_name="events/informal/index.html"), name='informal'),

    path('sports', TemplateView.as_view(template_name="events/sports/index.html"), name='sports'),

    path('online/pubg', views.pubg, name='pubg'),
    path('rampwalk', views.rampwalk, name='rampwalk'),

    path('prayagdarshan', views.city, name='city'),

    path('paheli', views.paheli_fun, name='paheli'),

    path('literary', views.literary, name='literary'),
    # path('litif/', TemplateView.as_view(template_name="events/Literary/literary.html"), name='literary'),
    
    path('technical', views.technical, name='technical'),
    
    path('eggdrop', views.egg_drop, name='eggdrop'),
    
    path('base2', TemplateView.as_view(template_name="base2.html"), name='base2'),
    path('base3', TemplateView.as_view(template_name="base3.html"), name='base3'),

]