from django import forms
from .models import UploadedMedia

#forms to upload files
class UploadedMediaForm(forms.ModelForm):
    class Meta:
        model = UploadedMedia,
        title =[title, image, video, project_type]