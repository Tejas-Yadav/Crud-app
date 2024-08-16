import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Users from './USers'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes path='/' element={<users/>} ></Routes>
        <Routes path='/create' element={<CreateUser/>} ></Routes>
        <Routes path='/update' element={<UpdateUser/>} ></Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
