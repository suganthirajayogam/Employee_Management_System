import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import CustomApi from './CustomApi'
import Header from './Header'



const DeleteEmployee = () => {
  const{responseData,fetchData}=CustomApi()
  const {id}=useParams()
  const navigate = useNavigate()

  const deletedata=async()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const apiurl='http://localhost:3000/Employee_data/'
        fetchData(apiurl,method='delete',body=null,id=id) // another wy to use api // when we want to delete buy id give const apiurl at that time
      // await axios.delete(`http://localhost:3000/Employee_data/${id}`)
        .then(()=>{ 
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      })
      .catch(()=>{
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
      })
    })
  }});
   
  }
  useEffect(()=>{
    deletedata()
  },[])


return (
  <>
  <div> <Header/></div>

    <div>data deleted succesffully</div>
    </>
  )
}

export default DeleteEmployee