import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router';
import UpcomingTreks from './Pages/UpcomingTreks';
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/upcomingTreks' element={<UpcomingTreks/>}/>
      </Routes>

      
    </>
  )
}

export default App
