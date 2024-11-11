"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home import views

# django admin changes
admin.site.site_header = "Login to Sadoun"
admin.site.site_title = "Welocom to DashBord"
admin.site.index_title = "Welocom to Portal"

urlpatterns = [
    path('', views.home, name='home'),
    # path('', views.home, name='home'), or the portfolio details? 
    path('project', views.project, name='project'),
    path('#contact', views.contact, name='contact'),
    #path('skills', views.skills, name='skills'),
    path('contact', views.contact, name='contact'),
    path('experience/', views.experience_list, name='experience_list'), # new one to display experience_list dynamically
    # path('experience', views.experience, name='experience'), old path (must hardcode experience_list.html)
    path('experience/<int:skill_id>', views.skill_experience_view, name='experience_by_skill'),
    path('skills/', views.skills_list, name='skills_list'),
    path('skills/<int:skill_id>/', views.skill_experience_view, name='experience_by_skill'),
]
