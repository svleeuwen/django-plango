from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404

def home(request):
    return HttpResponse("Hello world")
