import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function DepartmentsPage() {

    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/departments')
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
        <h3>Departments Page</h3>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Building</th>
      <th scope="col">Budget</th>
    </tr>
  </thead>
  <tbody>

      {depts.map((ele, ind)=><tr>
      <th key={ind} scope="row">{ind+1}</th>
      <td>{ele.name}</td>
      <td>{ele.building}</td>
      <td>{ele.budget}</td>
    </tr>)}
    
  </tbody>
</table>
    </div>
  )
}
