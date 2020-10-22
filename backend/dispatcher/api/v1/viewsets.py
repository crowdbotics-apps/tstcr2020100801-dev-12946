from rest_framework import authentication
from dispatcher.models import Plane
from .serializers import PlaneSerializer
from rest_framework import viewsets


class PlaneViewSet(viewsets.ModelViewSet):
    serializer_class = PlaneSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Plane.objects.all()
