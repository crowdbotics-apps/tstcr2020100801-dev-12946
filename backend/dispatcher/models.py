from django.conf import settings
from django.db import models


class Plane(models.Model):
    "Generated Model"
    tail_number = models.CharField(
        max_length=10,
    )
    make = models.CharField(
        max_length=50,
    )
    model = models.CharField(
        max_length=100,
    )
    category = models.CharField(
        max_length=50,
    )
    description = models.TextField()


# Create your models here.
