
import React from 'react'
import Home from './routes/Home';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        

      </Routes>
    </div>
  )
}

export default App