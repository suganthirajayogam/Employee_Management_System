import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const onLogin = (e) => {
    e.preventDefault();
    sessionStorage.setItem('email', email.current.value);
    sessionStorage.setItem('password', password.current.value);
    Swal.fire('Congrats', 'Logged in successfully', 'success');
    navigate('/');
  };

  return (
    <form onSubmit={onLogin}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" ref={email} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" ref={password} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
  );
};

export default Login;
