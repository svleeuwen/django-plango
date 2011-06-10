from django.conf import settings

def google_analytics(context):
    return {'GOOGLE_ANALYTICS_TAG': settings.GOOGLE_ANALYTICS_TAG}
