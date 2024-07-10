from django.contrib import admin
from django.urls import path, include
from Backend import views
from djoser.views import TokenCreateView

urlpatterns = [
    path('transation-list/',views.transactionListView,name='view'),
    path('transation-create/',views.transactioncreate,name='add'),
    path('transation-delete/<int:pk>/', views.transaction, name='delete'),
    path('amount/',views.getamount,name='amount'),
]
