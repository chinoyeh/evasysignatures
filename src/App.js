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

const App = () => {
    return (
        <Router>
          
            <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/store' element={<Fashionstore/>}/>
          <Route path ='/shirt' element={<Shirt/>}/>
      
        </Routes>
              
          
        </Router>
    )
}

export default App
