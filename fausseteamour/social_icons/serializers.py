from rest_framework import serializers

class SocialIconSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=1000)
    url = serializers.CharField(max_length=10000)
    isSelected = serializers.BooleanField(default=False)
