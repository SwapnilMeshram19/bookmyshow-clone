import './BookShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAngleDown } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <div class="movie-details">
        <div class="movie-details-container">
          <div class="text-details">
            <div class="movie-info">
              <div class="movie-name">
                <h1><a>RRR</a></h1>
                <div class="ua-icon">
                    <img src={require('./image/ua_icon.png')}></img>
                    <span class="heart-rating">
                      <span class="heart-icon">
                        <img src={require('./image/heart.png')}></img>
                      </span>
                      <span class="percentage">90 %</span>
                      <br/>
                      <span class="votes">622134 VOTES</span>
                    </span>
                    <span class="tags">
                    <span class="genre-tag">Action</span>
                    <span class="genre-tag">Drama</span>
                    <span class="genre-tag">Historical</span>
                    <span class="genre-tag">Period</span>
                    </span>
                    <span class="release-date">March 25,2022</span>
                    <span class="clock-icon">
                      <img src={(require('./image/clock_icon.png'))}></img>
                    </span>
                    <span class="duration">3 hrs 02 mins</span>
                </div>
              </div>
              <div class="movie-cast">
                  <div class="director-info">
                    <div class="movie-cast-title">DIRECTOR</div>
                    <img class="movie-cast-image" src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/s-s-rajamouli-29189-07-10-2020-04-30-40.jpg'></img>
                    <div class="movie-cast-name" >S. S. Rajamouli</div>
                  </div>
                  <div class="cast-info">
                     <div class="movie-cast-title">CAST & CREW</div>
                     <div class="individual-cast-info">
                     
                     <img class="movie-cast-image" src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg'></img>
                     <div class="movie-cast-name" >Jr. NTR</div>
                     </div> 
                     <div class="individual-cast-info">
                     <img class="movie-cast-image" src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ram-charan-teja-1046368-19-09-2017-02-37-43.jpg'></img>
                     <div class="movie-cast-name" >Ram Cha</div>
                     </div> 
                     <div class="individual-cast-info">
                     <img class="movie-cast-image" src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/alia-bhatt-21065-13-09-2017-04-53-45.jpg'></img>
                     <div class="movie-cast-name" >Alia Bhat</div>
                     </div> 
                     <div class="individual-cast-info">
                     <img class="movie-cast-image" src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg'></img>
                     <div class="movie-cast-name" >Ajay Devgn</div>
                     </div> 
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
      <div class="filter-container">
        <div class="slider-container">
          <FaChevronLeft size="20px" class="right-icon"/>
          <div class="slider">
          <ul class="slider-ul">
            <li class="days-container">
              <div class="date">07</div>
              <div class="day">TOM</div>
            </li>
            <li>
              <div class="date">07</div>
              <div class="day">TOM</div>
            </li>
            <li>
              <div class="date">07</div>
              <div class="day">TOM</div>
            </li>
            <li>
              <div class="date">07</div>
              <div class="day">TOM</div>
            </li>
          </ul>
          </div>
          
          
          <FaChevronRight size="20px" class="left-icon"/>

        </div>
        <div class="links-box">
        <ul>
          <li>
            <div class="link">
              <a href="#"><span>Hindi 3D</span></a>
              <FaAngleDown class="down-icons" size="25px"/>
              <div class="dropdown-content" >
                <a href="./allDisease.html" target="_blank">Hindi Imax 3D</a>
                <a href="">Hindi 2D</a>
                <a href="">Hindi Imax 3D</a>
              </div>
            </div>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
