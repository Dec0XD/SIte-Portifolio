from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'home.html', {})

def produtos(request):
    return HttpResponse('Estou na tela de projetos :)')