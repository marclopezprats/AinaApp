from serpapi import GoogleSearch
import sqlite3

# Parámetros para buscar el lugar en Google Maps
params = {
  "engine": "google_maps",
  "q": "Aina Car - Alquiler de Coches, Furgonetas, Camiones en Sabadell - Barcelona",
  "ll": "@41.54680580447518, 2.0967318262351196,15.1z",
  "type": "search",
  "api_key": "dd26f730b3cb8414e8283d5f897a67f315aac6f8cb5237b626f4e82d35de6bbf"
}

search = GoogleSearch(params)
results = search.get_dict()
local_results = results["place_results"]['data_id']

# Parámetros para obtener las reseñas del lugar
params = {
  "engine": "google_maps_reviews",
  "data_id": local_results,
  "next_page_token": "CAESBkVnSUlDQQ==",
  "sort_by": "ratingHigh",
  "api_key": "dd26f730b3cb8414e8283d5f897a67f315aac6f8cb5237b626f4e82d35de6bbf"
}

search = GoogleSearch(params)
results = search.get_dict()
reviews = results["reviews"]







# Conectar a la base de datos SQLite
conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Eliminar datos existentes de la tabla
cursor.execute("DELETE FROM api_reseña")

# Insertar nuevas reseñas en la base de datos
for review in reviews:
    name = review['user']['name']
    rating = review['rating']
    snippet = review['snippet']
    avatar_url = review['user']['thumbnail']  # Obtener URL de la foto de perfil si existe

    print(name)
    print(rating)
    print(snippet)
    print(avatar_url)
    print('-' * 25)

    cursor.execute("INSERT INTO api_reseña (nombre, puntuacion, texto, foto_perfil) VALUES (?, ?, ?, ?)",
                   (name, rating, snippet, avatar_url))

# Guardar cambios y cerrar la conexión
conn.commit()
conn.close()

print('All Done!')
