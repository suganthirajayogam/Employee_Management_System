
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import CustomApi from './CustomApi'
import Header from './Header'




const AddEmployee = () => {
  const{responseData,fetchData}=CustomApi()
  const[employeeName,setEmployeeName]=useState('')
  const employeeEmail=useRef() // insted of using usestate ref
  // const[employeeEmail,setEmployeeEmail]=useState('')
  const[employeeNumber,setEmployeeNumber]=useState('')
  const[employeeDesignation,setEmployeeDesignation]=useState('')
  const[employeeRm,setEmployeeRm]=useState('')
  const[employeeJd,setEmployeeJd]=useState('')
  const[employeeID,setEmployeeID]=useState(0)
  const navigate=useNavigate()

  const handleForm=(e)=>{
    

    e.preventDefault()
    const employee_data={
      employee_id:employeeID,
      employee_name:employeeName,
      employee_contact_num:employeeNumber,
      employee_email:employeeEmail.current.value,  //to get a current value
      employee_designation:employeeDesignation,
      employee_reporting_manager:employeeRm,
      employee_joining_date:employeeJd
    }
    try{
      const apiurl='http://localhost:3000/Employee_data/'
      fetchData(apiurl,'post',employee_data)
      // axios.post("http://localhost:3000/Employee_data",employee_data)
      .then(()=>{
      new Swal("congrats","employee data added successfully","success")
      navigate('/view')

      })
      .catch(async()=>{
       new Swal("OOPS"," Something error server yy","error")
      navigate('/view')
      })
    }catch(error){
      console.log(error)
      new Swal("OOPS"," Something error occured","error")
      navigate('/view')
    }
  
      
  }
 
  return (
    <div>
       <Header/>
  <div>
    <input type="text" placeholder='Employee Name here'  onChange={((e)=>{setEmployeeName(e.target.value)})}/>
  </div>

<div>
<input type="text" placeholder='Employee email here'ref={employeeEmail} />
</div>

<div>
<input type="text" placeholder='Employee contact here' onChange={((e)=>{setEmployeeNumber(e.target.value)})}/>
</div>

<div>
<input type="text" placeholder='Employee designation here' onChange={((e)=>{setEmployeeDesignation(e.target.value)})} />
</div>

<div>
<input type="text" placeholder='Employee Reporting manager here' onChange={((e)=>{setEmployeeRm(e.target.value)})}/>
</div>

<div>
<input type="text" placeholder='Employee joining date here'onChange={((e)=>{setEmployeeJd(e.target.value)})} />
</div>
<div>
  <input type="button" value="Submit"  onClick={handleForm} />
  <input type="button" value="Reset" />
</div>
</div>

)
}
export default AddEmployee