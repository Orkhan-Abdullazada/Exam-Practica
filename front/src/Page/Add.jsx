import React from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import "./Add.scss"
import toast, { Toaster } from 'react-hot-toast';

function Add() {
  const formik=useFormik({
    initialValues:{
      name:"",
      position:"",
      image:"",
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:5001/crop",{...values}).then(res=>{
        console.log(res.data)
        toast.success("added data")
      })
    }
  })
  return (
   <div style={{height:"200px"}}>
    <div className='formik' >
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="name">name</label>
    <input
      id="name"
      name="name"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.name}
    />

    <label htmlFor="position">position</label>
    <input
      id="position"
      name="position"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.position}
    /> 

    

      <label htmlFor="image">image</label>
    <input
      id="image"
      name="image"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.image}
    />


    <button type="submit">Submit</button>
    
    
  </form>
    </div>
    <Toaster/>
   </div>
  )
}

export default Add
