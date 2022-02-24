from .views import *
from django.urls import path, include

urlpatterns = [
    path('/departments', DepartmentAPI.as_view(), name='DepartmentAPI'),
    path('/students', StudentsAPI.as_view(), name='StudentsAPI'),
    path('/instructors', InstructorAPI.as_view(), name='InstructorAPI'),
    path('/advisors', AdvisorAPI.as_view(), name='AdvisorAPI'),
    path('/courses', CourseAPI.as_view(), name='CourseAPI'),
    path('/prerequisites', PrerequisitesAPI.as_view(), name='PrerequisitesAPI'),
    path('/classrooms', ClassroomAPI.as_view(), name='ClassroomAPI'),
    path('/timeslots', TimeSlotAPI.as_view(), name='TimeSlotAPI'),
    path('/sections', SectionAPI.as_view(), name='SectionAPI'),
    path('/studenttakessection', StudentTakesSectionAPI.as_view(), name='StudentTakesSectionAPI'),
    path('/instructorteachessection', InstructorTeachesSectionAPI.as_view(), name='InstructorTeachesSectionAPI')
]