import React from 'react'

export default function MainPage() {
  return (
    
    <div style={{backgroundColor:'lightblue'}} className='container container-fluid text-center'>
        <br></br>
        <h3 style={{margin: '30px auto', backgroundColor:'red',padding:'10px'}}>College University Web Portal</h3>
        <div className="row" >
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Students</h5>
                        <a href="/add-student" className="card-link">Add</a>
                        <a href="/students" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Departments</h5>
                        <a href="/add-department" className="card-link">Add</a>
                        <a href="/departments" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Instructors</h5>
                        <a href="/add-instructor" className="card-link">Add</a>
                        <a href="/instructors" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Advisors</h5>
                        <a href="/add-advisor" className="card-link">Add</a>
                        <a href="/advisors" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Courses</h5>
                        <a href="/add-course" className="card-link">Add</a>
                        <a href="/courses" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Pre-Requisites</h5>
                        <a href="/add-prerequisite" className="card-link">Add</a>
                        <a href="/prerequisites" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Classroom</h5>
                        <a href="/add-classroom" className="card-link">Add</a>
                        <a href="/classrooms" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Time Slot</h5>
                        <a href="/add-timeslot" className="card-link">Add</a>
                        <a href="/timeslots" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Section</h5>
                        <a href="/add-section" className="card-link">Add</a>
                        <a href="/sections" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Student and Section</h5>
                        <a href="/add-student-section" className="card-link">Add</a>
                        <a href="/student-sections" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px', backgroundColor:'yellow'}}>
                    <div className="card-body">
                        <h5 className="card-title">Instructor and Section</h5>
                        <a href="/add-instructor-section" className="card-link">Add</a>
                        <a href="/instructor-sections" className="card-link">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
