import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function CoursesPage() {
  
    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/courses')
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
            <h3>Courses Page</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Credits</th>
          <th scope="col">Department</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
    
          {depts.map((ele, ind)=><tr>
          <th key={ind} scope="row">{ind+1}</th>
          <td>{ele.credits}</td>
          <td>{ele.department}</td>
          <td>{ele.title}</td>
        </tr>)}
        
      </tbody>
    </table>
        </div>
  )
}
