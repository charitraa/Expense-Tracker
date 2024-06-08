from django.db import models

# Create your models here.

class Transaction(models.Model):
    name = models.CharField(max_length=200,null=False)
    amount = models.CharField(max_length=200,null=False)
    type = models.CharField(max_length=200,null=False, default='expense')
    created_at = models.DateField(auto_created=True,null=True)
