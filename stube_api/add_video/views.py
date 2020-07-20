from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import AddVideoSerializers
from .models import AddVideoModels
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class AddVideoViews(APIView):

    def get(self,request):
        queryset    = AddVideoModels.objects.all()
        serializers = AddVideoSerializers(queryset,many=True)
        return Response(serializers.data)

    def post(self,request):
        code   = request.data.get("code")
        course = request.data.get("course")
        data={
            "code":code,
            "course":course
        }
        serializers = AddVideoSerializers(data=data)
        if serializers.is_valid(raise_exception=True):
            saved = serializers.save()
        return Response({"Successfully Saved".format(saved)})

    def put(self,request,pk):
        instance = get_object_or_404(AddVideoModels,pk=pk)
        code   = request.data.get("code")
        course = request.data.get("course")
        data={
            "code":code,
            "course":course
        }
        serializers = AddVideoSerializers(instance=instance,data=data,partial=True)
        if serializers.is_valid(raise_exception=True):
            saved = serializers.save()
        return Response({"Successfully Updated".format(saved)})

    def delete(self,request,pk):
        instance = get_object_or_404(AddVideoModels,pk=pk)
        instance.delete()
        return Response({"Successfully Deleted"})
