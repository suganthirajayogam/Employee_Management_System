import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'


const EditEmployee = () => {
  const{id}=useParams()
    const[employeeName,setEmployeeName]=useState('')
    const[employeeEmail,setEmployeeEmail]=useState('')
    const[employeeNumber,setEmployeeNumber]=useState('')
    const[employeeDesignation,setEmployeeDesignation]=useState('')
    const[employeeRm,setEmployeeRm]=useState('')
    const[employeeJd,setEmployeeJd]=useState('')
    const[employeeID,setEmployeeID]=useState(1)
  
    const handleForm=()=>{
      const employee_data={
        employee_id:employeeID,
        employee_name:employeeName,
        employee_contact_num:employeeNumber,
        employee_email:employeeEmail,
        employee_designation:employeeDesignation,
        employee_reporting_manager:employeeRm,
        employee_joining_date:employeeJd
      }
        const response=axios.put(`http://localhost:3000/Employee_data/${id}`,employee_data)
        response
        .then(()=>{
          console.log("Data added succesffully")
          setEmployeeID(preid=> preid+1)
        })
      .catch((e)=>{
          console.log("data failed to update")
        })

        
    }
 
  return (
    <>
    <div>   <Header/></div>
    <div>
      <div><h1>EDIT EMPLOYEE</h1></div>
  <div>
    <input type="text" placeholder='Employee Name here' />
  </div>

<div>
<input type="text" placeholder='Employee email here'/>
</div>

<div>
<input type="text" placeholder='Employee contact here'/>
</div>

<div>
<input type="text" placeholder='Employee designation here' />
</div>

<div>
<input type="text" placeholder='Employee Reporting manager here'/>
</div>

<div>
<input type="text" placeholder='Employee joining date here' />
</div>
<div>
  <input type="button" value="Submit"  onClick={handleForm} />
  <input type="button" value="Reset" />
</div>
</div>
</>
  )
}

export default EditEmployee