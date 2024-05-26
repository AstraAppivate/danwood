from django.contrib import admin
from django.urls import include, path
from operations.endpoints import operation_patterns
from graphene_django.views import GraphQLView

urlpatterns = [
    path('api/admin', admin.site.urls),
    path('api/ops/', include(operation_patterns)),
    path('api/graphql', GraphQLView.as_view(graphiql=True)),
    
]