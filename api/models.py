from django.db import models

class Reseña(models.Model):
    nombre = models.CharField(max_length=100)
    puntuacion = models.TextField() 
    texto = models.TextField() 
    foto_perfil = models.TextField()