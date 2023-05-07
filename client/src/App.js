import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={Home} />
          <Route path='/about' element={About} />
          <Route path='/Works' element={Works} />
          <Route path='/contact' element={Contact} />
          <Route path='/sign-up' element={SignUp} />
          <Route path='/sign-in' element={SignIn} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
