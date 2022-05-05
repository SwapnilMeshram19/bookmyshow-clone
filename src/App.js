import React from 'react';
import "./App.css";
// import { Homepage } from "./Components/Homepage/Homepage";

import { BookShow } from "./Components/BookShow";
// import { Routes,Route } from 'react-router-dom';
// import {Movie} from './Components/Movie'
// import { Moviedata } from './Components/Moviedata';
// import FirstSection from './Components/PaymentPage/FirstSection';
import { Homepage } from "./Components/Homepage/Homepage";
import { Routes,Route } from 'react-router-dom';
import {Movie} from './Components/Movie'
import { Moviedata } from './Components/Moviedata';
import FirstSection from './Components/PaymentPage/FirstSection';
import {Debounce} from './Components/debounce'
import {SummaryPage} from "./Components/SummeryPage/SummeryPage";

// import Seating from './Components/Seating';
function App() {


  return (
    <div className="App">
      {/* <BookShow/> */}
         <Routes>
            <Route path="/" exact element={<Homepage/>} />
            <Route path='/movie' exact element={<Movie />} />
            <Route path='/moviedata/:id' exact element={<Moviedata />}/>
            <Route path='/payment' element={<FirstSection />}/>
            <Route path='/summary_page' exact element={<SummaryPage/>}/> 
            <Route path='/bookshow' exact element={<BookShow/>}/>
         </Routes>
{/* <Debounce/> */}
         {/* <Seating/> */}

    </div>
  );
      }

export default App;