import os, site

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")

# Add the app dir to the python path so we can import manage.
wsgidir = os.path.dirname(__file__)
site.addsitedir(os.path.abspath(os.path.join(wsgidir, '../')))
site.addsitedir(os.path.abspath(os.path.join(wsgidir, '../', '../')))
# add the virtualenv sitepackages dir
#site.addsitedir('/var/www/<project>/<env>/lib/python2.6/site-packages/')
site.addsitedir('/usr/lib/python2.6/dist-packages/')

# This application object is used by the development server
# # as well as any WSGI server configured to use this file.
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

