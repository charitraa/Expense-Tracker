from django.db import models

# Create your models here.

class Transaction(models.Model):
    name = models.CharField(max_length=200,null=False)
    amount = models.CharField(max_length=200,null=False)
    created_at = models.DateField(auto_created=True)
