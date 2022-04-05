
import './App.css';
import React from 'react'
import { Routes,Route } from 'react-router-dom';
import {Movie} from './Components/Movie'
import {Navbar} from './Components/Navbar'
function App() {


  return (
    <div className="App">
  <Navbar />
         <Routes>

           <Route path='/movie' element={<Movie />} />
         </Routes>
  
       
    </div>
  );
      }

export default App;
