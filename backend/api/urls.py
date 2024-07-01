from django.urls import path
from .views import reseñas_list, set_cookie_view

urlpatterns = [
    path('reseñas/', reseñas_list, name='obtener_reseñas'),
    path('set-cookie/', set_cookie_view, name='set_cookie'),
]
