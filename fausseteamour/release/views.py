from .models import Release
from .serializers import ReleaseSerializer
from rest_framework import viewsets

class ReleaseViewSet(viewsets.ModelViewSet):
    queryset = Release.objects.all()
    serializer_class = ReleaseSerializer


    def getBlogpost(self, request):
        blogpost = self.get_object()
        return blogpost