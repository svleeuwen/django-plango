from django.shortcuts import render_to_response
from django.core.urlresolvers import reverse
from django.contrib import messages
from django.template import RequestContext
from django.conf import settings
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout

def homepage(request):
    return render_to_response('homepage.html', {}, context_instance=RequestContext(request))
