# coding: utf-8
"""
WSGI config for kobo project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""
from __future__ import (division, print_function, absolute_import,
                        unicode_literals)
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kobo.settings.prod')

application = get_wsgi_application()
