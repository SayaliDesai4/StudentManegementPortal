import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddStudentTakesSectionPage() {


    const [depts, setDepts] = useState([])
    const [depts2, setDepts2] = useState([])

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
        axios.get('http://localhost:8000/api/students')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts2(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(theVals)
        axios.post('http://localhost:8000/api/studenttakessection', theVals)
        .then((response)=>{
            console.log(response)
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
                <label className='form-label' htmlFor="grade">Grade</label><br />
                <input className='form-control' value={theVals.grade} onChange={changeHandler} type="text" name="grade" id="grade" required /><br /><br />

                <label className='form-label' htmlFor="section">Section</label><br />
                <select className='form-select' name="section" id="section" onChange={changeHandler}>
                    <option value={-1}>Select</option>
                    {depts.map((ele, ind)=><option key={ind} value={ele.id}>Course-{ele.course} Title-{ele.title} Semester-{ele.semester} {ele.year}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="student">Student</label><br />
                <select className='form-select' name="student" id="student" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts2.map((ele, ind)=><option key={ind} value={ele.id}>{ele.name}</option>)}
                </select><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>

            </form>
            <br></br>
        </div>
      )
}
