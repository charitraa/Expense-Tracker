from django.contrib import admin
from django.urls import path, include
from Backend import views

urlpatterns = [
    path('transation-list/',views.transactionView,name='view'),
    path('transation-create/',views.transactioncreate,name='add'),
    path('todo-delete/<int:pk>/', views.transactiondelete, name='delete')
]
