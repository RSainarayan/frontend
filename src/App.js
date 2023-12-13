import { BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom";
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Myform from './components/Myform';
import React from 'react';
import Home from './components/Home'
import Read from './components/Read'
import { ReactDOM } from 'react';
import Edit from "./components/Edit";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Myform/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path="/edit" element={<Edit/>}/>
          
        </Routes>
      </Router>
      
    
      

    </div>
    
  );
}

export default App;
