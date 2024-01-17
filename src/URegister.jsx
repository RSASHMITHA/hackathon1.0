import React, { useState, useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from './UserContext';
import './URegister.css';
const URegister = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(null);
  const [signupDetails, setSignupDetails] = useState({ 
    name: "",
    dob:"",
    age: "",
    aadhar: "",
    acc: "",
    gender: "",
    mobile: "",
    occup: "",
    email: "",
    password: "",
    nationality: "",
    state: "",
    address: "",
   });
   
   const { setUser } = useContext(UserContext); 

  

  
  const handleInputChange = (e) => {
    // alert(e.target.name);
    setSignupDetails({ ...signupDetails, [e.target.vname]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <div className='whole'>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
    <div >
      <form >
      <br></br>
      <h2 className='m'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REGISTER</h2>

        <table>
          <tbody>
          <tr>
          <td><b>NAME :</b></td>
          <td>
            <input
              type="text"
              vname="name"
              value={signupDetails.name}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>


        <tr>
        <td><b>DOB :</b></td>
          <td>
            <input
              type="date"
              vname="dob"
              value={signupDetails.dob}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>

        <tr>
        <td><b>AGE :</b></td>
          <td>
            <input
              type="text"
              vname="age"
              value={signupDetails.age}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>AADHAR NUMBER :</b></td>
          <td>
            <input
              type="tel"
              vname="aadhar"
              value={signupDetails.aadhar}
              onChange={handleInputChange}
              pattern="[0-9]{12}"
              required
            />
          </td>
        </tr>

        <tr>
          <td><b>Account NUMBER :</b></td>
          <td>
            <input
              type="tel"
              vname="acc"
              value={signupDetails.acc}
              onChange={handleInputChange}
              pattern="[0-9]{17}"
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>GENDER :</b></td>
          <td>
              <select vname="gender" onChange={handleInputChange}>
                <option></option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHERS">OTHERS</option>
              </select>
          </td>
        </tr>


        <tr>
          <td><b>MOBILE NUMBER :</b></td>
          <td>
            <input
              type="tel"
              vname="mobile"
              value={signupDetails.mobile}
              onChange={handleInputChange}
              pattern="[0-9]{10}"
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>OCCUPATION :</b></td>
          <td>
            <input
                type="text"
                vname="occup"
              value={signupDetails.occup}
              onChange={handleInputChange}
                required
            />
          </td>
        </tr>


        <tr>
          <td><b>EMAIL :</b></td>
          <td>
            <input
              type="email"
              vname="email"
              value={signupDetails.email}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>PASSWORD :</b></td>
          <td>
            <input
              type="password"
              vname="password"
              value={signupDetails.password}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>CONFIRM PASSWORD :</b></td>
          <td>
            <input
              type="password"
              vname="confirmPassword"
              value={confirm}
              onChange={handleConfirmPassword}
              required
            />
          </td>
        </tr>
             
        
        <tr>
          <td><b>NATIONALITY :</b></td>
          <td>
            <input
                type="text"
                vname="nationality"
              value={signupDetails.nationality}
              onChange={handleInputChange}
                required
            />
          </td>
        </tr>

        <tr>
          <td><b>STATE :</b></td>
          <td>
            <input
                type="text"
                vname="state"
              value={signupDetails.state}
              onChange={handleInputChange}
                required
            />
          </td>
        </tr>


        <tr>
          <td><b>ADDRESS :</b></td>
          <td>
            <input
                type="text"
                vname="address"
              value={signupDetails.address}
              onChange={handleInputChange}
                required
            />
          </td>
        </tr>


        <tr>
            <td colSpan="2" style={{ textAlign: 'center' }}>
              <button type="submit">Register</button>
            </td>
        </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
    </div>
  );
};

export default URegister;
