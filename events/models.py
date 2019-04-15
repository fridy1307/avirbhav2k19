from django.db import models

# Create your models here.
class event_category(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class point(models.Model):
    event = models.ForeignKey(event_category, on_delete=models.CASCADE)
    name = models.CharField(max_length=500)
    First = models.IntegerField()
    Second = models.IntegerField(blank=True, null=True)
    Third = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return self.name
    
class egg_drop_item_list(models.Model):
    item = models.CharField(max_length=500)
    price = models.CharField(max_length=200)
    def __str__(self):
        return self.item