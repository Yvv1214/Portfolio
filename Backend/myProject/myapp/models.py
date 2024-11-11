from django.db import models

# Create your models here.
class UploadedMedia(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    video = models.FileField(upload_to='videos/')
    project_type = models.CharField(max_length=100) # which project these images belong to


    def __str__(self) -> str:
        return self.title
    
instance = UploadedMedia.objects.first()  # Get an instance
image_url = instance.image.url  # This will give you the URL to the image


