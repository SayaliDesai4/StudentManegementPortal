import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddDepartmentPage from './pages/AddDepartmentPage'
import DepartmentsPage from './pages/DepartmentsPage'
import AddStudentPage from './pages/AddStudentPage'
import StudentsPage from './pages/StudentsPage'
import AddInstructorPage from './pages/AddInstructorPage';
import InstructorsPage from './pages/InstructorsPage';
import AddAdvisorPage from './pages/AddAdvisorPage';
import AdvisorsPage from './pages/AdvisorsPage';
import AddCoursePage from './pages/AddCoursePage';
import CoursesPage from './pages/CoursesPage';
import AddPreRequisitePage from './pages/AddPreRequisitePage';
import PreRequisitesPage from './pages/PreRequisitesPage';
import AddClassroomPage from './pages/AddClassroomPage';
import ClassroomsPage from './pages/ClassroomsPage';
import AddTimeslotPage from './pages/AddTimeslotPage';
import TimeslotsPage from './pages/TimeslotsPage';
import AddSectionPage from './pages/AddSectionPage';
import SectionsPage from './pages/SectionsPage';
import AddStudentTakesSectionPage from './pages/AddStudentTakesSectionPage';
import StudentTakesSectionsPage from './pages/StudentTakesSectionsPage';
import AddInstructorTeachesSectionPage from './pages/AddInstructorTeachesSectionPage';
import InstructorTeachesSectionsPage from './pages/InstructorTeachesSectionsPage';

function App() {
  return (
    <>
  <Router className='app'>
    <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/add-department" element={<AddDepartmentPage/>}/>
        <Route exact path="/departments" element={<DepartmentsPage/>}/>
        <Route exact path="/add-student" element={<AddStudentPage/>}/>
        <Route exact path="/students" element={<StudentsPage/>}/>
        <Route exact path="/add-instructor" element={<AddInstructorPage/>}/>
        <Route exact path="/instructors" element={<InstructorsPage/>}/>
        <Route exact path="/add-advisor" element={<AddAdvisorPage/>}/>
        <Route exact path="/advisors" element={<AdvisorsPage/>}/>
        <Route exact path="/add-course" element={<AddCoursePage/>}/>
        <Route exact path="/courses" element={<CoursesPage/>}/>
        <Route exact path="/add-prerequisite" element={<AddPreRequisitePage/>}/>
        <Route exact path="/prerequisites" element={<PreRequisitesPage/>}/>
        <Route exact path="/add-classroom" element={<AddClassroomPage/>}/>
        <Route exact path="/classrooms" element={<ClassroomsPage/>}/>
        <Route exact path="/add-timeslot" element={<AddTimeslotPage/>}/>
        <Route exact path="/timeslots" element={<TimeslotsPage/>}/>
        <Route exact path="/add-section" element={<AddSectionPage/>}/>
        <Route exact path="/sections" element={<SectionsPage/>}/>
        <Route exact path="/add-student-section" element={<AddStudentTakesSectionPage/>}/>
        <Route exact path="/student-sections" element={<StudentTakesSectionsPage/>}/>
        <Route exact path="/add-instructor-section" element={<AddInstructorTeachesSectionPage/>}/>
        <Route exact path="/instructor-sections" element={<InstructorTeachesSectionsPage/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
