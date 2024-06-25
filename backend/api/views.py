import environ
from django.http import JsonResponse
from serpapi import GoogleSearch
from rest_framework.decorators import api_view

# Initialize environment variables
env = environ.Env()
environ.Env.read_env()

@api_view(['GET'])
def reseñas_list(request):
    # Define search parameters for Google Maps place search
    search_params = {
        "engine": "google_maps",
        "q": "Aina Car - Alquiler de Coches, Furgonetas, Camiones en Sabadell - Barcelona",
        "ll": "@41.54680580447518,2.0967318262351196,15.1z",
        "type": "search",
        "api_key": env('SERPAPI_KEY')
    }

    # Perform the search for the place
    try:
        search = GoogleSearch(search_params)
        results = search.get_dict()
        local_results = results["place_results"]["data_id"]
    except KeyError:
        return JsonResponse({'error': 'Place not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

    # Define parameters for fetching reviews
    review_params = {
        "engine": "google_maps_reviews",
        "data_id": local_results,
        "sort_by": "ratingHigh",
        "api_key": env('SERPAPI_KEY')
    }

    # Fetch the reviews
    try:
        review_search = GoogleSearch(review_params)
        review_results = review_search.get_dict()
        reviews = review_results["reviews"]
    except KeyError:
        return JsonResponse({'error': 'Reviews not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

    # Return reviews as JSON response
    return JsonResponse({'Reseñas': reviews})
