import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmiCalculator from './components/EmiCalculator'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<EmiCalculator/>}/>
      </Routes>
    </Router>
   
  )
}
