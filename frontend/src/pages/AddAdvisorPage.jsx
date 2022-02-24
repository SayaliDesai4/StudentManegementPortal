import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddAdvisorPage() {

    const [theVals, setTheVals] = useState({})
    const [depts, setDepts] = useState([])
    const [depts2, setDepts2] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/students')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('http://localhost:8000/api/instructors')
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


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/advisors', theVals)
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
            <h3>Add Advisor</h3>
            <br />
            <form onSubmit={submitHandler}>
                <label htmlFor="student" className='form-label'>Student</label><br />
                <select className='form-select' name="student" id="student" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts.map((ele, ind)=><option key={ind} value={ele.id}>{ele.name}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="instructor">Instructor</label><br />
                <select className='form-select' name="instructor" id="instructor" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts2.map((ele, ind)=><option key={ind} value={ele.id}>{ele.name}</option>)}
                </select><br /><br />
    
                <button type="submit" className='btn btn-success'>Add</button>
            </form>
            <br></br>
        </div>
      )
}
