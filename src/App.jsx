import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Header from './Components/Header'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<><Header /> <Home /></>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;