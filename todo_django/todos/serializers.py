from pyexpat import model
from rest_framework import serializers
#dale fixed with 
# Control+ shift + p.
#type 'Python: Select Interpreter' and select the same.
#choose your virtual env from the list if it is not listed please choose Enter Interpreter path'


from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields= '__all__'