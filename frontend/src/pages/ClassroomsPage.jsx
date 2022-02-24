import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function ClassroomsPage() {

    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/classrooms')
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
            <h3>Classrooms Page</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Building</th>
          <th scope="col">Room Number</th>
          <th scope="col">Capacity</th>
        </tr>
      </thead>
      <tbody>
    
          {depts.map((ele, ind)=><tr>
          <th key={ind} scope="row">{ind+1}</th>
          <td>{ele.building}</td>
          <td>{ele.room_number}</td>
          <td>{ele.capacity}</td>
        </tr>)}
        
      </tbody>
    </table>
        </div>
      )
}
