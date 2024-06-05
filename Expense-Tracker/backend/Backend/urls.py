from django.contrib import admin
from django.urls import path, include
from Backend import views

urlpatterns = [
    path('transation-list/',views.transactionListView,name='view'),
    path('transation-create/',views.transactioncreate,name='add'),
    path('transation-delete/<int:pk>/', views.transaction, name='delete'),
    path('total-income/',views.gettotalincome,name='income'),
    path('total-expense/',views.gettotalexpenses,name='expense'),
    path('current-amount/',views.get_current_amount,name='expense'),
]
