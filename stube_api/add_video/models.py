from django.db import models

class AddVideoModels(models.Model):
    code   = models.CharField(max_length=15)
    course = models.CharField(max_length=80) 