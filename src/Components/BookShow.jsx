import React from 'react'
import './BookShow.css';
import Navbar from './Navbar'
import Footer from './Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAngleDown } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const BookShow= () => {

  return (
    <div className="Container">
        <Navbar/>
      <div className="movie-details">
        <div className="movie-details-container">
          <div className="text-details">
            <div className="movie-info">
              <div className="movie-name">
                <h1><a>RRR</a></h1>
                <div className="ua-icon">
                    <img src={require('./Image/ua_icon.png')}></img>
                    <span className="heart-rating">
                      <span className="heart-icon">
                        <img src={require('./Image/heart.png')}></img>
                      </span>
                      <span className="percentage">90 %</span>
                      <br/>
                      <span className="votes">622134 VOTES</span>
                    </span>
                    <span className="tags">
                    <span className="genre-tag">Action</span>
                    <span className="genre-tag">Drama</span>
                    <span className="genre-tag">Historical</span>
                    <span className="genre-tag">Period</span>
                    </span>
                    <span className="release-date">March 25,2022</span>
                    <span className="clock-icon">
                      <img src={(require('./Image/clock_icon.png'))}></img>
                    </span>
                    <span className="duration">3 hrs 02 mins</span>
                </div>
              </div>
              <div className="movie-cast">
                  <div className="director-info">
                    <div className="movie-cast-title">DIRECTOR</div>
                    <img className="movie-cast-image" src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/s-s-rajamouli-29189-07-10-2020-04-30-40.jpg'></img>
                    <div className="movie-cast-name" >S. S. Rajamouli</div>
                  </div>
                  <div className="cast-info">
                     <div className="movie-cast-title">CAST & CREW</div>
                     <div className="individual-cast-info">
                     
                     <img className="movie-cast-image" src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg'></img>
                     <div className="movie-cast-name" >Jr. NTR</div>
                     </div> 
                     <div className="individual-cast-info">
                     <img className="movie-cast-image" src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ram-charan-teja-1046368-19-09-2017-02-37-43.jpg'></img>
                     <div className="movie-cast-name" >Ram Cha</div>
                     </div> 
                     <div className="individual-cast-info">
                     <img className="movie-cast-image" src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/alia-bhatt-21065-13-09-2017-04-53-45.jpg'></img>
                     <div className="movie-cast-name" >Alia Bhat</div>
                     </div> 
                     <div className="individual-cast-info">
                     <img className="movie-cast-image" src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg'></img>
                     <div className="movie-cast-name" >Ajay Devgn</div>
                     </div> 
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
      <div className="filter-container">
        <div className="slider-container">
          <FaChevronLeft size="20px" className="right-icon"/>
          <div className="slider">
          <ul className="slider-ul">
            <li className="days-container">
              <div className="date">07</div>
              <div className="day">TOM</div>
            </li>
            <li>
              <div className="date">07</div>
              <div className="day">TOM</div>
            </li>
            <li>
              <div className="date">07</div>
              <div className="day">TOM</div>
            </li>
            <li>
              <div className="date">07</div>
              <div className="day">TOM</div>
            </li>
          </ul>
          </div>
          
          
          <FaChevronRight size="20px" className="left-icon"/>

        </div>
        <div className="links-box">
        <ul>
          <li>
            <div className="link">
              <a href="#"><span>Hindi 3D</span></a>
              <FaAngleDown className="down-icons" size="25px"/>
              <div className="dropdown-content" >
                <a href="./allDisease.html" target="_blank">Hindi Imax 3D</a>
                <a href="">Hindi 2D</a>
                <a href="">Hindi Imax 3D</a>
              </div>
            </div>
          </li>
          </ul>
        </div>
      </div>
      <div class="show-details"> 
        <div class="theater-info">
            <img class="wishlist-icon"src={require('./Image/heart_blank.png')}/>
            <span class="theater-name">Cinepolis: Fun Republic Mall, Andheri (W) </span>
            <span class="info-icon">
                <img src="https://in.bmscdn.com/moviemode/cinemaphotoshowcase/safety_first.png"/>
                <span>INFO</span>
            </span>
            <div class="mticket-bevarage-container">
                <span class="mticket-icon">
                    <img src={require('./Image/mticket.png')}/>
                    <span>M-Ticket</span>
                </span>
                <span class="foodbevarage-icon">
                    <img src={require('./Image/food-bevarage.png')}/>
                    <span>Food & Beverage</span>
                </span>
            </div>
    
        </div>
        
        <div class="show-time">
            <div class="show-time-container">
                    <a>07:35 PM</a>
            </div>
            <div class="prices-bubble">
                <div class="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
             </div>
            </div>
            <div class="show-time-container">
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container">
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
      <Footer/>
    </div>
  );
}

export {BookShow};
