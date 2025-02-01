import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Header = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem('email');
  const password = sessionStorage.getItem('password');

  const onLogout = () => {
    if (email && password) {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('password');
      Swal.fire('Congrats', 'Logout successful', 'success');
      navigate('/login');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          EMPLOYEE MANAGEMENT SYSTEM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            {email && password ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/Add">
                    Add Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/view">
                    View Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/delete">
                    Delete Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/edit">
                    Edit Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/update">
                    Update Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={onLogout}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
