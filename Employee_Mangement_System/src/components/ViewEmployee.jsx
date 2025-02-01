import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomApi from './CustomApi'
import Header from './Header'
Header
const ViewEmployee = () => {
  const{responseData,fetchData}=CustomApi()
  const getdata=async()=>{
     fetchData()
  }   

const deletedata=async(id)=>{
  const response=await axios.delete(`http://localhost:3000/Employee_data/${id}`)
  .then(()=>{console.log("data deleted succesfully")})
  .catch(()=>{console.log("failed to delete")})
  
}


  useEffect(()=>{
      getdata()
  },[])

  return (
    
   <>
   <center>
   <h1 className='text-primary m-5 p-5'>WELCOME TO PORTAL</h1>
   </center>
   <table>
    <tr>
      <th>ID</th>
      <th>Employee_name</th>
      <th>Employee_contact_num</th>
      <th>Employee_email</th>
      <th>Employee_designation</th>
      <th>Employee_reporting_manager</th>
      <th>Employee_joining_date</th>
      <th>Edit</th>
      <th>Delete</th>

    </tr>
    {responseData.map((data, index)=>{return(
      <tr className='text-center'>
        <td>{index+1}</td>
        <td>{data.employee_name}</td>
        <td>{data.employee_contact_num}</td>
        <td>{data.employee_email}</td>
        <td>{data.employee_designation}</td>
        <td>{data.employee_reporting_manager}</td>
        <td>{data.employee_joining_date}</td>
        <td><Link to={`/update/${data.id}`}><i className='fa fa-edit text-primary'></i></Link></td>
        <td><Link to={`/delete/${data.id}`}> <i className='fa fa-trash text-danger' onClick={() => deletedata(data.id)}></i></Link></td>
       


      </tr>
    )})}
   </table>
   </>
  )
}

export default ViewEmployee 