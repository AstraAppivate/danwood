from django.db import models
from base.models import BaseModel   



class Realm(BaseModel):
      
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    property_limit = models.IntegerField(default=3)
    seats = models.IntegerField(default=5)
    soft_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        super().save(*args, **kwargs)
    
    
    