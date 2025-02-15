from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from Apps.store.serializer.startup.startup import StartupSerializer


class RegisterStartupView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = StartupSerializer(data=request.data)
        if serializer.is_valid():
            startup = serializer.save(owner=request.user)
            return Response({"message": "Emprendimiento registro existosamente."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)