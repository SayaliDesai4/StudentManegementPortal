import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function InstructorTeachesSectionsPage() {
    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/instructorteachessection')
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
        <div style={{backgroundColor:'lightblue'}} className='container container-fluid'>
          <br></br>
            <h3>Instructor Teaches Section Page</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Instructor</th>
          <th scope="col">Section Course</th>
          <th scope="col">Section Semester</th>
          <th scope="col">Section Year</th>
        </tr>
      </thead>
      <tbody>
    
          {depts.map((ele, ind)=><tr>
          <th key={ind} scope="row">{ind+1}</th>
          <td>{ele.instructor}</td>
          <td>{ele.sectionCourse}</td>
          <td>{ele.sectionSemester}</td>
          <td>{ele.sectionYear}</td>
        </tr>)}
        
      </tbody>
    </table>
        </div>
      )
}
