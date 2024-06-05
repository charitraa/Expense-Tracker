from rest_framework import serializers
from .models import Transaction

class TransationSerializer(serializers.ModelSerializer):
    class Meta:
        model =Transaction
        fields = '__all__'

    def create(self, validated_data):
        return Transaction.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
