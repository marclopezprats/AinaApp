from django.urls import path
from .views import set_cookie_view

urlpatterns = [
    path('set-cookie/', set_cookie_view, name='set_cookie'),
]
