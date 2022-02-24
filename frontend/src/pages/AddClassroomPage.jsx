import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddClassroomPage() {

    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/classrooms', theVals)
        .then((response)=>{
            alert("Added Successfully!")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const changeHandler = (event) => {
        setTheVals({...theVals, [event.target.name]: event.target.value})
    }

    return (
        <div style={{backgroundColor:'lightblue'}}className='container container-fluid text-center'>
            <br></br>
            <h3>Add Classroom</h3>
            <br />
            <form onSubmit={submitHandler}>
            <label className='form-label' htmlFor="building">Building</label><br />
            <input className='form-control' value={theVals.building} onChange={changeHandler} type="text" name="building" id="building" required /><br /><br />

            <label className='form-label' htmlFor="room_number">Room Number</label><br />
            <input className='form-control' value={theVals.room_number} onChange={changeHandler} type="text" name="room_number" id="room_number" required /><br /><br />

            <label className='form-label' htmlFor="capacity">Capacity</label><br />
            <input className='form-control' value={theVals.capacity} onChange={changeHandler} type="text" name="capacity" id="capacity" required /><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>
            </form>
            <br></br>
        </div>
      )
}
