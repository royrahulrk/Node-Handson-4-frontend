import React from 'react'
import "./App.css"
import { Route,Routes } from 'react-router-dom'
import LoginForm from './Component/LogIn'
import SignupForm from './Component/SignUp'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/signup' element={<SignupForm/>}/>
    </Routes>
    </>
  )
}

export default App