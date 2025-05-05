import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './pages/Start/Start';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;