from django.db import models

class UploadedImage(models.Model):
    title = models.CharField(max_length=100)  # Optional: a title for the image
    image = models.ImageField(upload_to='images/')  # Set directory under MEDIA_ROOT

    def __str__(self):
        return self.title
