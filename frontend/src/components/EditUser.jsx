import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import url from '../api/bootApi';
import Swal from 'sweetalert2';

export default function EditUser() {
    const navigate=useNavigate();
     const {id}=useParams();
    const [user,setUser]=useState({
      name:'',
      email:'',
      password:'',
      dob:'',
      address:'',

    });

      const getUserData=()=>{
        axios.get(`${url}/user/${id}`).then((response)=>{
            setUser(response.data);
            
        }).catch((error)=>{
            console.log(error);
            
        })
      }





      useEffect(()=>{
      
        getUserData();
      },[])


      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };
    
     
      const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`${url}/user/${id}`,user).then((response)=>{
          if(response.data){
            Swal.fire({
              text:"User Updated Successfully",
              icon:"success"
            });
          }  
        },
      (error)=>{
        console.log(error);
        
      })
       
        
      navigate("/");
      }



      

  return (
    <div className='d-flex align-items-center justify-content-center vh-100 '>
    <div className="p-3 rounded w-50 border ">
        <h2 className='text-center mb-4 ' >Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className='col-12 mb-3  '>
            <label htmlFor="name"><strong>Name:</strong></label>
            <input type="text" name='name'  placeholder='Enter Name' id='name' className='form-control rounded' value={user.name} 
            onChange={handleChange} required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="email"><strong>Email:</strong></label>
            <input type="email" name='email'  placeholder='Enter Email' id='email' className='form-control rounded' value={user.email} 
             onChange={handleChange}  required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="password"><strong>Password:</strong></label>
            <input type="password" name='password'  placeholder='Enter Password' id='password' className='form-control rounded' value={user.password} 
             onChange={handleChange} required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="dob"><strong>Date Of Birth:</strong></label>
            <input type="date" name='dob'  placeholder='Enter Date of Birth' id='dob' className='form-control rounded' value={user.dob} 
             onChange={handleChange} required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="address"><strong>Address:</strong></label>
            <input type="text" name='address'  placeholder='Enter Address' id='address' className='form-control rounded-0' value={user.address} 
             onChange={handleChange} required/>
          </div>

          <button className='btn btn-primary w-100 rounded col-12 mb-2'>Edit User</button>
        </form>
    </div>
</div>
  )
}
