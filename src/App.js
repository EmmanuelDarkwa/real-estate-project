import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Post1 from './pages/Post1';
import Post2 from './pages/Post2';
import "./App.css";
import Forgotten from './pages/Forgotten';



const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/post1' element={<Post1 />} />
        <Route path='/post2' element={<Post2 />} />
        <Route path='/forgot-password' element={<Forgotten />} />
      </Routes>
      <Footer />
    </div >
  );
};

export default App;