from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
import json

class StudentsAPI(APIView):
    def get(self, request):
        try:
            allInstances = Student.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "name": instance.name, "credits": instance.credits, "department": instance.department.name})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            name = request.data['name']
            credits = request.data['credits']
            department = request.data['department']
            department = Department.objects.filter(id=department)[0]
            newTask = Student(name=name, credits=credits, department=department)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class DepartmentAPI(APIView):
    def get(self, request):
        try:
            allInstances = Department.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "name": instance.name, "building": instance.building, "budget": instance.budget})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            name = request.data['name']
            building = request.data['building']
            budget = request.data['budget']
            newTask = Department(name=name, building=building, budget=budget)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class InstructorAPI(APIView):
    def get(self, request):
        try:
            allInstances = Instructor.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "name": instance.name, "salary": instance.salary, "department": instance.department.name})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            name = request.data['name']
            salary = request.data['salary']
            department = request.data['department']
            department = Department.objects.filter(id=department)[0]
            newTask = Instructor(name=name, salary=salary, department=department)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class AdvisorAPI(APIView):
    def get(self, request):
        try:
            allInstances = Advisor.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "student": instance.student.name, "instructor": instance.instructor.name})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            student = request.data['student']
            instructor = request.data['instructor']
            instructor = Instructor.objects.filter(id=instructor)[0]
            student = Student.objects.filter(id=student)[0]
            newTask = Advisor(student=student,instructor=instructor)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class CourseAPI(APIView):
    def get(self, request):
        try:
            allInstances = Course.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "credits": instance.credits, "department": instance.department.name, "title": instance.title})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            title = request.data['title']
            credits = request.data['credits']
            department = request.data['department']
            department = Department.objects.filter(id=department)[0]
            newTask = Course(title=title,credits=credits,department=department)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class PrerequisitesAPI(APIView):
    def get(self, request):
        try:
            allInstances = Prerequisites.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "course": instance.course.title, "prereq": instance.course.title})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            prereq = request.data['prereq']
            prereq = Course.objects.filter(id=prereq)[0]
            course = request.data['course']
            course = Course.objects.filter(id=course)[0]
            newTask = Prerequisites(prereq=prereq, course=course)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class ClassroomAPI(APIView):
    def get(self, request):
        try:
            allInstances = Classroom.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "building": instance.building, "room_number": instance.room_number, "capacity": instance.capacity})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            building = request.data['building']
            room_number = request.data['room_number']
            capacity = request.data['capacity']
            newTask = Classroom(building=building, room_number=room_number, capacity=capacity)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class TimeSlotAPI(APIView):
    def get(self, request):
        try:
            allInstances = TimeSlot.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "day": instance.day, "startTime": instance.startTime, "endTime": instance.endTime})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            day = request.data['day']
            startTime = request.data['startTime']
            endTime = request.data['endTime']
            newTask = TimeSlot(day=day, startTime=startTime, endTime=endTime)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class SectionAPI(APIView):
    def get(self, request):
        try:
            allInstances = Section.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "course": instance.course.title, "semester": instance.semester, "year": instance.year, "classroomBuilding": instance.classroom.building, "classroomRoomNumber": instance.classroom.room_number, "timeslot": {
                        "day": instance.timeSlot.day,
                        "startTime": instance.timeSlot.startTime,
                        "endTime": instance.timeSlot.endTime,
                    }})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            semester = request.data['semester']
            year = request.data['year']
            course = request.data['course']
            course = Course.objects.filter(id=course)[0]
            classroom = request.data['classroom']
            classroom = Classroom.objects.filter(id=classroom)[0]
            timeSlot = request.data['timeSlot']
            timeSlot = TimeSlot.objects.filter(id=timeSlot)[0]
            newTask = Section(semester=semester, course=course, year=year, classroom=classroom, timeSlot=timeSlot)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class StudentTakesSectionAPI(APIView):
    def get(self, request):
        try:
            allInstances = StudentTakesSection.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "grade": instance.grade, "sectionCourse": instance.section.course.title,"sectionSemester": instance.section.semester,"sectionYear": instance.section.year, "student": instance.student.name})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            grade = request.data['grade']
            section = request.data['section']
            section = Section.objects.filter(id=section)[0]
            student = request.data['student']
            student = Student.objects.filter(id=student)[0]
            newTask = StudentTakesSection(grade=grade, section=section, student=student)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})

class InstructorTeachesSectionAPI(APIView):
    def get(self, request):
        try:
            allInstances = InstructorTeachesSection.objects.filter()
            allList = []
            for instance in allInstances:
                allList.append({"id": instance.id, "instructor": instance.instructor.name, "sectionCourse": instance.section.course.title,"sectionSemester": instance.section.semester,"sectionYear": instance.section.year})
            return Response(allList)
        except:
            return Response({"status": "500 Some Error Occurred"})
    def post(self, request):
        try:
            instructor = request.data['instructor']
            instructor = Instructor.objects.filter(id=instructor)[0]
            section = request.data['section']
            section = Section.objects.filter(id=section)[0]
            newTask = InstructorTeachesSection(instructor=instructor, section=section)
            newTask.save()
            return Response({"status": "200 OK"})
        except:
            return Response({"status": "500 Some Error Occurred"})