import React from 'react';
import "./App.css";
import { Homepage } from "./Components/Homepage/Homepage";
import { Routes,Route } from 'react-router-dom';
import {Movie} from './Components/Movie'
import { Moviedata } from './Components/Moviedata';
import FirstSection from './Components/PaymentPage/FirstSection';

import {SummaryPage} from "./Components/SummeryPage/SummeryPage";
function App() {


  return (
    <div className="App">
         <Routes>
            <Route path="/" exact element={<Homepage/>} />
            <Route path='/movie' exact element={<Movie />} />
            <Route path='/moviedata/:id' exact element={<Moviedata />}/>
            <Route path='/payment' element={<FirstSection />}/>
            <Route path='/summary_page' exact element={<SummaryPage/>}/>
           
         </Routes>

    </div>
  );
      }

export default App;