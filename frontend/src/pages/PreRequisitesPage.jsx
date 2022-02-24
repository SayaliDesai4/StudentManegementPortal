import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function PreRequisitesPage() {

    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/prerequisites')
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
            <h3>Pre-requisites Page</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Course</th>
          <th scope="col">Pre-Requisite</th>
        </tr>
      </thead>
      <tbody>
    
          {depts.map((ele, ind)=><tr>
          <th key={ind} scope="row">{ind+1}</th>
          <td>{ele.course}</td>
          <td>{ele.prereq}</td>
        </tr>)}
        
      </tbody>
    </table>
        </div>
      )
}
