from django.shortcuts import render
from rest_framework.decorators import api_view
from . serializers import TransationSerializer
from rest_framework import status
from rest_framework.response import Response
from .models import Transaction
from django.views.decorators.csrf import csrf_protect
from rest_framework.response import Response
from django.db.models import Sum


@api_view(['GET'])
def gettotalincome(request):
    total_income = Transaction.objects.filter(amount__gt=0).aggregate(total_income=Sum('amount'))['total_income'] or 0
    return Response({'total_income': total_income}, status=status.HTTP_200_OK)

@api_view(['GET'])
def gettotalexpenses(request):
    total_expense = Transaction.objects.filter(amount__lt=0).aggregate(total_expense=Sum('amount'))['total_expense'] or 0
    return Response({'total_expense': total_expense}, status=status.HTTP_200_OK)

@api_view(['GET'])
def transactionView(request):
    transaction = Transaction.objects.all()
    serializer = TransationSerializer(transaction, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# # @csrf_protect
@api_view(['POST'])
def transactioncreate(request):
    serializer = TransationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])        
def transactiondelete(request,pk):
    try:
        transaction =Transaction.objects.get(id=pk)
        transaction.delete()
        return Response({"success": "transaction deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    except transaction.DoesNotExist:
        return Response({"error": "transaction not found"}, status=status.HTTP_404_NOT_FOUND)
    