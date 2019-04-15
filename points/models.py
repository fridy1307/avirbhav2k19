from django.db import models

# Create your models here.
class event_category(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=30)
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


class add_point(models.Model):
    name = models.CharField(max_length=500)
    lenisters = models.IntegerField(blank=True, null=True)
    baratheons = models.IntegerField(blank=True, null=True)
    targaryens = models.IntegerField(blank=True, null=True)
    starks = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return self.name