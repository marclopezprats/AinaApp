from django.http import JsonResponse
from serpapi import GoogleSearch
from rest_framework.decorators import api_view
import environ

env = environ.Env()
environ.Env.read_env()

@api_view(['GET'])
def reseñas_list(request):
    search_params = {
        "engine": "google_maps",
        "q": "Aina Car - Alquiler de Coches, Furgonetas, Camiones en Sabadell - Barcelona",
        "ll": "@41.54680580447518,2.0967318262351196,15.1z",
        "type": "search",
        "api_key": env('SERPAPI_KEY')
    }

    try:
        search = GoogleSearch(search_params)
        results = search.get_dict()
        local_results = results["place_results"]["data_id"]
    except KeyError:
        return JsonResponse({'error': 'Place not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

    review_params = {
        "engine": "google_maps_reviews",
        "data_id": local_results,
        "sort_by": "ratingHigh",
        "api_key": env('SERPAPI_KEY')
    }

    try:
        review_search = GoogleSearch(review_params)
        review_results = review_search.get_dict()
        reviews = review_results["reviews"]
    except KeyError:
        return JsonResponse({'error': 'Reviews not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'Reseñas': reviews})

def set_cookie_view(request):
    response = JsonResponse({"message": "Cookie has been set"})
    response.set_cookie(
        key='my_cookie', 
        value='cookie_value', 
        max_age=3600,  # Expira en 1 hora
        httponly=True, 
        secure=True, 
        samesite='Lax'
    )
    return response



