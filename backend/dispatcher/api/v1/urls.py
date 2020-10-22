from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PlaneViewSet

router = DefaultRouter()
router.register("plane", PlaneViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
