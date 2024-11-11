from django.contrib import admin
#from home.models import Home
from home.models import Contact # abdulla adding contact to admin
from home.models import Skill # abdulla adding skills to admin
from home.models import Experience # abdulla adding experience to admin


# Register your models here.

#admin.site.register(Home)
admin.site.register(Contact)

#admin.site.register(Skill) abdulla adding skills to admin
admin.site.register(Skill)

# abdulla adding experience to admin
admin.site.register(Experience)