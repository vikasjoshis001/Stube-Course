from rest_framework import serializers
from .models import AddVideoModels

class AddVideoSerializers(serializers.Serializer):
        code   = serializers.CharField(max_length=15)
        course = serializers.CharField(max_length=80)

        def create(self,Validated_data):
            return AddVideoModels.objects.create(**Validated_data)

        def update(self,instance,validated_data):
            instance.code   = validated_data.get("code",instance.code)
            instance.course = validated_data.get("course",instance.course)

            instance.save()
            return instance