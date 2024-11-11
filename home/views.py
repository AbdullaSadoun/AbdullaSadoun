from django.shortcuts import render, HttpResponse
from .models import Experience, Skill

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
        #name == request.POST['name']
        #email == request.POST['email']
        #subject == request.POST['subject']
        #message == request.POST['message']
        #contact = models.Home(name=name, email=email, subject=subject, message=message)
        contact.save()
    #return render(request, 'home.html')
    return render(request, 'index.html')

def experience_list(request):
    experiences = Experience.objects.all()  # Fetch all experience entries
    # return render(request, 'experience.html')
    return render(request, 'experience_list.html', {'experiences': experiences}) # Pass experiences

from django.shortcuts import render, get_object_or_404
from .models import Skill, Experience

def skill_experience_view(request, skill_id):
    skill = get_object_or_404(Skill, id=skill_id)
    experiences = skill.experiences.all()
    return render(request, 'experience_by_skill.html', {'skill': skill, 'experiences': experiences})

from .models import Skill

def skills_list(request):
    skills = Skill.objects.all()
    return render(request, 'skills_list.html', {'skills': skills})