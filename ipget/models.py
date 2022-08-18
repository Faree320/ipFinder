from django.db import models


class Main(models.Model):
    ip = models.CharField(max_length=200)
