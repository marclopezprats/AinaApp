import requests

def obtener_publicaciones(access_token):
    url = f"https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token={access_token}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if 'data' in data:
            return data['data']
        else:
            print("No se encontraron datos de publicaciones.")
    else:
        print("Error al obtener las publicaciones:", response.text)

# Reemplaza 'TU_ACCESS_TOKEN' con tu propio Access Token
access_token = 'IGQWRPNWNlaGdsT0RzTld5UGU0MHdzRWJFN1l3QlRnZAl9qY2tLTHpaVVotOVdiRndXWEgzTEJrY3RLMDE4WjZAQNlJZAVlY1LXp3TUVkYkE5MFN2VTNFTlJta3pqLTVSckQtSmxHaHFsWlJNX1VqWno1Q1h5eE5iQjQZD'
publicaciones = obtener_publicaciones(access_token)
if publicaciones:
    for publicacion in publicaciones:
        print("ID:", publicacion['id'])
        print("Caption:", publicacion.get('caption', ''))
        print("Tipo de medio:", publicacion['media_type'])
        print("URL del medio:", publicacion['media_url']) 
        print("Enlace permanente:", publicacion['permalink'])
        print()
