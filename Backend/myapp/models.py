from django.db import models


class UploadedVid(models.Model):
    title = models.CharField(max_length=100)
    video = models.FileField(upload_to='videos/')

class UploadedImage(models.Model):
    title = models.CharField(max_length=100)  # title for the image
    image = models.ImageField(upload_to='images/')  # Set directory under MEDIA_ROOT
    project_type = models.CharField(max_length=100) # which project these images belong to

instance = UploadedImage.objects.first()  # Get an instance
image_url = instance.image.url  # This will give you the URL to the image


def __str__(self):
    return self.title
