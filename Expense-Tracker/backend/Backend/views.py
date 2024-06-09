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
def getamount(request):
    total_income = Transaction.objects.filter(type='income').aggregate(total_income=Sum('amount'))['total_income'] or 0
    total_expense = Transaction.objects.filter(type='expense').aggregate(total_expense=Sum('amount'))['total_expense'] or 0
    current_amount = total_income - total_expense
    return Response({'total_income': total_income,'total_expense': total_expense,'current_amount': current_amount}, status=status.HTTP_200_OK)

@api_view(['GET'])
def transactionListView(request):
    transaction = Transaction.objects.all()
    serializer = TransationSerializer(transaction, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def transactioncreate(request):
    serializer = TransationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PATCH','DELETE'])        
def transaction(request,pk):
    
    if request.method == 'GET':
        try:
            transaction =Transaction.objects.get(id=pk)
            serializer = TransationSerializer(transaction)
            return Response(serializer.data, status=status.HTTP_302_FOUND)
        except Transaction.DoesNotExist:
            return Response({"error": "transaction not found"}, status=status.HTTP_404_NOT_FOUND)
    
    elif request.method == 'DELETE':
        try:
            transaction =Transaction.objects.get(id=pk)
            transaction.delete()
            return Response({"success": "transaction deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Transaction.DoesNotExist:
            return Response({"error": "transaction not found"}, status=status.HTTP_404_NOT_FOUND)
    
    elif request.method == 'PATCH':
        try:
            transaction =Transaction.objects.get(id=pk)
            serializer = TransationSerializer(transaction,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Transaction.DoesNotExist:
            return Response({"error": "transaction not found"}, status=status.HTTP_404_NOT_FOUND)