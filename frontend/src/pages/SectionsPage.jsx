import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function SectionsPage() {

    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/sections')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    return (
        <div style={{backgroundColor:'lightblue'}}className='container container-fluid'>
          <br></br>
            <h3>Sections Page</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Course</th>
          <th scope="col">Semester</th>
          <th scope="col">Year</th>
          <th scope="col">Classroom Building</th>
          <th scope="col">Classroom Room Number</th>
          <th scope="col">Day</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Time</th>
        </tr>
      </thead>
      <tbody>
    
          {depts.map((ele, ind)=><tr>
          <th key={ind} scope="row">{ind+1}</th>
          <td>{ele.course}</td>
          <td>{ele.semester}</td>
          <td>{ele.year}</td>
          <td>{ele.classroomBuilding}</td>
          <td>{ele.classroomRoomNumber}</td>
          <td>{ele.timeslot.day}</td>
          <td>{ele.timeslot.startTime}</td>
          <td>{ele.timeslot.endTime}</td>
        </tr>)}
        
      </tbody>
    </table>
        </div>
      )
}
