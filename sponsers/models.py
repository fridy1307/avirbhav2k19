from django.db import models
import os
from django.conf import settings
# Create your models here.

def get_image_path(instance, filename):
    return os.path.join('sponsers' , filename)

class sponser(models.Model):
    name = models.CharField(max_length=200)
    batch = models.CharField(max_length=10)
    gender = models.CharField(max_length=2,choices=(('M','M'),('F','F')))
    photo = models.ImageField(upload_to=get_image_path, blank=True, null=True)
    fb_link = models.URLField()
    email = models.EmailField()
    amount = models.IntegerField()
    def __str__(self):
        context = self.name
        return context