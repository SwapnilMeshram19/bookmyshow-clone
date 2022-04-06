
import './App.css';
import React from 'react'
import { Routes,Route } from 'react-router-dom';
import {Movie} from './Components/Movie'
import { Moviedata } from './Components/Moviedata';
import {Navbar} from './Components/Navbar'
import FirstSection from './Components/PaymentPage/FirstSection';
function App() {


  return (
    <div className="App">
  <Navbar />
         <Routes>

           <Route path='/movie' element={<Movie />} />
           <Route path='/moviedata/:id' element={<Moviedata />}/>
         <Route path='/payment' element={<FirstSection />}/>
         </Routes>
  
     
    </div>
  );
      }

export default App;
