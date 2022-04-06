import "./App.css";
// import { Homepage } from "./Components/Homepage/Homepage";

import React from 'react'
import { BookShow } from "./Components/BookShow";
// import { Routes,Route } from 'react-router-dom';
// import {Movie} from './Components/Movie'
// import { Moviedata } from './Components/Moviedata';
// import FirstSection from './Components/PaymentPage/FirstSection';
function App() {


  return (
    <div className="App">
      <BookShow/>
         {/* <Routes>
            <Route path="/" exact element={<Homepage/>} />
            <Route path='/movie' exact element={<Movie />} />
            <Route path='/moviedata/:id' exact element={<Moviedata />}/>
         </Routes> */}

    </div>
  );
      }

export default App;