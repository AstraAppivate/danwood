from django.http import JsonResponse
from django.urls import path

def health_check(request):
    """
    A simple view that returns a JsonResponse with a status.
    """
    
    return JsonResponse({'status': 'ok'})

operation_patterns = [
   
    path('health-check/', health_check),
    
]