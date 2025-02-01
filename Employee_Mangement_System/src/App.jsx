import React from 'react'
import Home from './components/Home'
import AddEmployee from './components/AddEmployee'
import ViewEmployee from './components/ViewEmployee'
import ViewAllEmployee from './components/ViewAllEmployee'
import EditEmployee from './components/EditEmployee'
import { Route, Routes } from 'react-router-dom'
import DeleteEmployee from './components/DeleteEmployee'
import './App.css';
import Update from './components/Update'
import Header from './components/Header'
import Login from './components/Login'


const App = () => {
  return (
  <>
   <div className="background">
   <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='add' element={<AddEmployee/>}/>
    <Route path='view' element={<ViewEmployee/>}/>
    <Route path='view/id' element={<ViewAllEmployee/>}/>
    <Route path='edit/:id' element={<EditEmployee/>}/>
    <Route path='delete/:id' element={<DeleteEmployee/>}/>
    <Route path='update/:id' element={<Update/>}/>
    <Route path='header' element={<Header/>}/>
    <Route path='login' element={<Login/>}/>
    
   </Routes>
   </div>
   </>
  )
}

export default App