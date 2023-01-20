from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'home.html')

def projetos(request):
    return HttpResponse('Tela dos meus projetos')