import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Users from './USers'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<users/>} ></Route>
          <Route path='/create' element={<CreateUser/>} ></Route>
          <Route path='/update' element={<UpdateUser/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
