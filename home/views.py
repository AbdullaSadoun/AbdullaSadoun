from django.shortcuts import render, HttpResponse

# Create your views here.


def home(request):
    #contact form database
    # if request.method == 'POST':
    #     name == request.POST['name']
    #     email == request.POST['email']
    #     subject == request.POST['subject']
    #     message == request.POST['message']
    #     contact = models.Home(name=name, email=email, subject=subject, message=message)
    #     contact.save()
    #return render(request, 'home.html')
    return render(request, 'index.html')


def project(request):
    #return render(request, 'project.html')
    return render(request, 'portfolio-details.html')


def contact(request):
    #contact form database
    if request.method == "POST":
        name == request.POST['name']
        email == request.POST['email']
        subject == request.POST['subject']
        message == request.POST['message']
        contact = models.Home(name=name, email=email, subject=subject, message=message)
        contact.save()
    #return render(request, 'home.html')
    return render(request, 'index.html')

