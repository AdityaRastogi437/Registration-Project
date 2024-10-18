import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import View from './components/View'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}>
      <Route path='/' element={<View/>}></Route>
      <Route path='/add_user' element={<AddUser/>}></Route>
      <Route path='/edit_user/:id' element={<EditUser/>}></Route>
      </Route>
      </Routes>

    </>
  )
}
