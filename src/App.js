import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import './App.css'


import Home from './pages/Home/Home'
import Fashionstore from './pages/Store/Fashionstore';
import Shirt from './pages/Store/Shirt'
import Gown from './pages/Store/Gown'
import Bespoken from './pages/Bespoken/Bespoken';

const App = () => {
    return (
        <Router>
          
            <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/store' element={<Fashionstore/>}/>
          <Route path ='/shirt' element={<Shirt/>}/>
          <Route path ='/gown' element={<Gown/>}/>
          <Route path = '/bespoken' element ={<Bespoken/>}/>
      
        </Routes>
              
          
        </Router>
    )
}

export default App
