import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddSectionPage() {


    const [depts, setDepts] = useState([])
    const [depts2, setDepts2] = useState([])
    const [depts3, setDepts3] = useState([])

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
        axios.get('http://localhost:8000/api/classrooms')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts2(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('http://localhost:8000/api/timeslots')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts3(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/sections', theVals)
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
            <h3>Add Section</h3>
            <br />
            <form onSubmit={submitHandler}>
                <label className='form-label' htmlFor="semester">Semester</label><br />
                <input className='form-control' value={theVals.semester} onChange={changeHandler} type="text" name="semester" id="semester" required /><br /><br />

                <label className='form-label' htmlFor="year">Year</label><br />
                <input className='form-control' value={theVals.year} onChange={changeHandler} type="text" name="year" id="year" required /><br /><br />

                <label className='form-label' htmlFor="course">Course</label><br />
                <select className='form-select' name="course" id="course" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts.map((ele, ind)=><option key={ind} value={ele.id}>{ele.title}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="classroom">Classroom</label><br />
                <select className='form-select' name="classroom" id="classroom" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts2.map((ele, ind)=><option key={ind} value={ele.id}>{ele.building} {ele.room_number}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="timeSlot">Time Slot</label><br />
                <select className='form-select' name="timeSlot" id="timeSlot" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts3.map((ele, ind)=><option key={ind} value={ele.id}>{ele.day} {ele.startTime}-{ele.endTime}</option>)}
                </select><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>

            </form>
            <br></br>
        </div>
      )
}
