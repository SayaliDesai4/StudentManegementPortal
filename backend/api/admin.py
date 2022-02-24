from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Department)
admin.site.register(Student)
admin.site.register(Instructor)
admin.site.register(Advisor)
admin.site.register(Course)
admin.site.register(Prerequisites)
admin.site.register(Classroom)
admin.site.register(TimeSlot)
admin.site.register(Section)
admin.site.register(StudentTakesSection)
admin.site.register(InstructorTeachesSection)