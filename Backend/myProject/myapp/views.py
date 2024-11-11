from django.shortcuts import render, redirect
from .forms import UploadedMediaForm

# Create your views here.
#view the UploadedMediaForm from forms.py
def upload_media(request):
    if request.method == 'POST':
        form = UploadedMediaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('upload_success')
    else:
        form = UploadedMediaForm()
    return render(request, 'upload.html', {'form': form})