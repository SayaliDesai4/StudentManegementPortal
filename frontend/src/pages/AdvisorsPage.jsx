import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function AdvisorsPage() {

    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/advisors')
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
            <h3>Advisors Page</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Student</th>
          <th scope="col">Instructor</th>
        </tr>
      </thead>
      <tbody>
    
          {depts.map((ele, ind)=><tr>
          <th key={ind} scope="row">{ind+1}</th>
          <td>{ele.student}</td>
          <td>{ele.instructor}</td>
        </tr>)}
        
      </tbody>
    </table>
        </div>
      )
}
