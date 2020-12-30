from django.db import models


# Create your models here.
class Cards(models.Model):
    type = models.CharField(max_length=10)

