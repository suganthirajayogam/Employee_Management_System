
import React, { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import CustomApi from './CustomApi';
import axios from 'axios';
import Header from './Header';


const Update = () => {
  const{responseData,fetchData}=CustomApi()
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    employee_name: '',
    employee_contact_num: '',
    employee_email: '',
    employee_designation: '',
    employee_reporting_manager: '',
    employee_joining_date: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'EMPLOYEENAME':
        return { ...state, employee_name: action.payload };
      case 'EMPLOYEECONTACT_NUM':
        return { ...state, employee_contact_num: action.payload };
      case 'EMPLOYEEEMAIL':
        return { ...state, employee_email: action.payload };
      case 'EMPLOYEEDESIGNATION':
        return { ...state, employee_designation: action.payload };
      case 'EMPLOYEEREPORTINGMANAGER':
        return { ...state, employee_reporting_manager: action.payload };
      case 'EMPLOYEEJOININGDATE':
        return { ...state, employee_joining_date: action.payload };
      default:
        return state; // Return the current state if action.type is not handled
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    employee_name,
    employee_contact_num,
    employee_email,
    employee_designation,
    employee_reporting_manager,
    employee_joining_date,
  } = state;

  const getvalue = async () => {
    try {
      const apiurl='http://localhost:3000/Employee_data/'+id
      const response = await axios.get(apiurl)
      dispatch({ type: 'EMPLOYEENAME', payload: response.data.employee_name });
      dispatch({ type: 'EMPLOYEECONTACT_NUM', payload: response.data.employee_contact_num });
      dispatch({ type: 'EMPLOYEEEMAIL', payload: response.data.employee_email });
      dispatch({ type: 'EMPLOYEEDESIGNATION', payload: response.data.employee_designation });
      dispatch({ type: 'EMPLOYEEREPORTINGMANAGER', payload: response.data.employee_reporting_manager });
      dispatch({ type: 'EMPLOYEEJOININGDATE', payload: response.data.employee_joining_date });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changevalues = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name.toUpperCase(), payload: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const employee_details = {
      employee_name,
      employee_contact_num,
      employee_email,
      employee_designation,
      employee_reporting_manager,
      employee_joining_date,
    };

    try {
      await axios.put(`http://localhost:3000/Employee_data/${id}`, employee_details);
      Swal.fire('Congrats', 'Data updated successfully!', 'success');
      navigate('/view');
    } catch {
      Swal.fire('Oops', 'Failed to update', 'error');
    }
  };

  useEffect(() => {
   getvalue();
  }, [id]);

 
  return (
    <>
    <div> <Header/></div>
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Employee Name here"
            name="EMPLOYEENAME"
            value={employee_name}
            onChange={changevalues}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Employee Contact Number here"
            name="EMPLOYEECONTACT_NUM"
            value={employee_contact_num}
            onChange={changevalues}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Employee Email here"
            name="EMPLOYEEEMAIL"
            value={employee_email}
            onChange={changevalues}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Employee Designation here"
            name="EMPLOYEEDESIGNATION"
            value={employee_designation}
            onChange={changevalues}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Employee Reporting Manager here"
            name="EMPLOYEEREPORTINGMANAGER"
            value={employee_reporting_manager}
            onChange={changevalues}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Employee Joining Date here"
            name="EMPLOYEEJOININGDATE"
            value={employee_joining_date}
            onChange={changevalues}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
            Reset
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Update;
