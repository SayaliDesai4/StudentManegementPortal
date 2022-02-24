from unicodedata import name
from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=300, unique=True)
    building = models.CharField(max_length=300)
    budget = models.CharField(max_length=300)

class Student(models.Model):
    name = models.CharField(max_length=300)
    credits = models.CharField(max_length=300)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

class Instructor(models.Model):
    name = models.CharField(max_length=300)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    salary = models.CharField(max_length=300)

class Advisor(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)

class Course(models.Model):
    title = models.CharField(max_length=3)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    credits = models.CharField(max_length=300)

class Prerequisites(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='%(class)s_requests_created')
    prereq = models.ForeignKey(Course, on_delete=models.CASCADE)

class Classroom(models.Model):
    building = models.CharField(max_length=300, unique=True)
    room_number = models.CharField(max_length=300)
    capacity = models.CharField(max_length=300)

class TimeSlot(models.Model):
    day = models.CharField(max_length=300)
    startTime = models.CharField(max_length=300)
    endTime = models.CharField(max_length=300)

class Section(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    semester = models.CharField(max_length=300)
    year = models.CharField(max_length=300)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    timeSlot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)

class StudentTakesSection(models.Model):
    grade = models.CharField(max_length=300)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

class InstructorTeachesSection(models.Model):
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)