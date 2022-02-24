import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddTimeslotPage() {

    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/timeslots', theVals)
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
        <div style={{backgroundColor:'lightblue'}} className='container container-fluid text-center'>
            <br></br>
            <h3>Add Timeslot</h3>
            <br />
            <form onSubmit={submitHandler}>
            <label className='form-label' htmlFor="day">Day</label><br />
            <input className='form-control' value={theVals.day} onChange={changeHandler} type="text" name="day" id="day" required /><br /><br />

            <label className='form-label' htmlFor="startTime">Start Time</label><br />
            <input className='form-control' value={theVals.startTime} onChange={changeHandler} type="text" name="startTime" id="startTime" required /><br /><br />

            <label className='form-label' htmlFor="endTime">End Time</label><br />
            <input className='form-control' value={theVals.endTime} onChange={changeHandler} type="text" name="endTime" id="endTime" required /><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>
            </form>
            <br></br>
        </div>
      )
}
