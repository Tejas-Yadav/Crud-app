import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Users from './Users'
import CreateUser from './createUser'
import UpdateUser from './updateUser'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>} ></Route>
          <Route path='/create' element={<CreateUser/>} ></Route>
          <Route path='/update' element={<UpdateUser/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
