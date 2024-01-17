import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import UserContext
import './ULogin.css';

function ULogin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });
  const { setUser } = useContext(UserContext);

  

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username);
    
    // console.log(foundUsers);

    
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='whole'>
      <div >
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
       <form onSubmit={handleLogin}>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</h2>
          <label>
            <b>USERNAME :</b>
            <input
              type="text"
              name="username"
              value={loginDetails.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
           <b> PASSWORD :</b>
            <input
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/sidebar"><button type="submit">Login</button></Link>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account</h5>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/ureg"><button>Register</button></Link>
        </form>

        <br></br>
        
      </div>
       
        </div>
      
      </div>
  )
}


export default ULogin;
