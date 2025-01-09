import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
    <Link to={"/"}> Allen</Link>
    |
    <Link to={"/neet/online-coaching-class-11"}>Class 11</Link>
    |
    <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
      <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
    </>
}

function Landing(){
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
  NEET programs for class 11th
  </div>
}

function Class12Program() {
  return <div>
    NEET programs for class 12th
  </div>
}

export default App