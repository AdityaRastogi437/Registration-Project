import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import url from '../api/bootApi';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function View() {
  
    const [view, setView] = useState([]);
     const navigator=useNavigate();
  
   
    const  getData= ()=>{

    axios
        .get(`${url}/users`)
        .then((result) => {
             setView(result.data);
        })
        .catch((err) => console.log(err));
   
      }
    useEffect(() => {
      getData();
    }, [getData]);
   
   
   
   
    const handleDelete = (id) => {
      Swal.fire({
        title:"Are You Sure",
        text:"You want to Delete this user",
        icon:"warning",
        showCancelButton:true,
        confirmButtonText:"Delete",
        confirmButtonColor:"#c9303f",
        cancelButtonText:"Cancel",
      }).then((result)=>{
        if(result.isConfirmed){
          axios.delete(`${url}/user/${id}`)
          .then(result => {
             console.log(result);
           
             
          }).catch((error)=>{
            console.log(error);
          
          })
          getData();
        }
      })
     
    } 


    const handleEdit=(id)=>{
     navigator(`/edit_user/${id}`);
    }
    return (
      <div className="px-5 mt-3 ">
        <div className="d-flex justify-content-center">
          <h3 >User List</h3>
        </div>
        <Link to="/add_user" className="btn btn-success">
          Add User
        </Link>
        <div className="mt-3">
          <table className="table ">
            <thead className='table-warning'>
              <tr >
                <th>Name</th>
                <th>Email</th>
                <th>password</th>
                <th>Date Of Birth</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='table-primary'>
              { view.map((e,index) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>{e.dob}</td>
                  <td>{e.address}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={()=>handleEdit(e.id)} >  Edit </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(e.id)} >Delete </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}
