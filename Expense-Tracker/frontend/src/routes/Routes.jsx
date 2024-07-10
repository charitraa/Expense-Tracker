import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../module/Login'
import Header from '../module/Header'
import Register from '../module/Register'

export default function RoutesNav () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/app' element={<Header />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}
