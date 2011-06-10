from django.http import HttpResponse
from django.conf import settings

def robots(request):
    f = open(settings.ROBOTS_FILE)
    return HttpResponse(f.read())

