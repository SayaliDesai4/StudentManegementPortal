import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddDepartmentPage() {

    const [theVals, setTheVals] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/departments', theVals)
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
        <h3>Add Department</h3>
        <br />
        <form onSubmit={submitHandler}>
            <label className='form-label' htmlFor="name">Name</label><br />
            <input className='form-control' value={theVals.name} onChange={changeHandler} type="text" name="name" id="name" required /><br /><br />
            
            <label className='form-label' htmlFor="building">Building</label><br />
            <input className='form-control' value={theVals.building} onChange={changeHandler} type="text" name="building" id="building" required /><br /><br />

            <label className='form-label' htmlFor="budget">Budget</label><br />
            <input className='form-control' value={theVals.budget} onChange={changeHandler} type="text" name="budget" id="budget" required /><br /><br />

            <button type="submit" className='btn btn-success'>Add</button>
        </form>
        <br></br>
    </div>
  )
}
