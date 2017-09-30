from django.shortcuts import render
from .models import SocialIcon
from .serializers import SocialIconSerializer
from rest_framework import viewsets

class SocialIconsViewSet(viewsets.ModelViewSet):
    queryset = SocialIcon.objects.all()
    serializer_class = SocialIconSerializer


    def getSocialIcon(self, request):
        socialIcon = SocialIcon.objects.filter(isSelected=True)
        return socialIcon
