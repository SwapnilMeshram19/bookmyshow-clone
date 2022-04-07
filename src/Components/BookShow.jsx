import React from 'react'
import { useState } from 'react';

// componenets Import
import './BookShow.css';
import Navbar from './Navbar'
import Footer from './Footer'
import SeatModal from './SeatModal.js';

//Dialog Import
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

// favicons imports
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAngleDown } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';


// main Function
const BookShow= () => {

   const navigate = useNavigate();

   const [open, setOpen] = React.useState(false);
   const [modalOpen, setModalOpen] = useState(false);
  
   const handleClickToOpen = () => {
    setOpen(true);
   };
  
   const handleToAccept=()=>{
        // setOpen(false);
        // setModalOpen(true);
        navigate('/summary_page');
  }
   const handleToCancle = () => {
    setOpen(false);
   };
   
   const Title = ({ children }) => <div class='dialog-title'>{children}</div>;
   const Content = ({ children }) => <div class='dialog-content'>{children}</div>;
   const style=Theme=> ({

   });

   //html code 
  return (
    <div className="Container">
        <Navbar/>
        
        <div stlye={{style}}>
      <Dialog open={open} onClose={handleToCancle}>
        <DialogTitle ><Title>{"Term and Conditions"}</Title></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Content>
            <ol>
              <li>Ticket is compulsory for children of 3 years & above.</li>
              <li>Incase the ticket is lost or misplaced, duplicate ticket will not be issued.</li>
              <li>Outside food & beverages are not allowed inside the cinema premises.</li>
              <li>Decision(s) taken by Cinepolis management is final & abiding.</li>
              <li>For 3D movies, ticket price includes charges towards usage of 3D glasses.</li>
              <li>Patrons below the age of 18 years will not be allowed to watch the `A` rated movie.</li>
            </ol>
            </Content>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleToCancle} style={{
                color:'#F84464',
                width:'40%',
                margin: '4%',
                padding:'10px',
                border: '2px solid #F84464',
                borderRadius:'10px',
                cursor: 'pointer'
            }}>Cancle</Button>
    
          <Button onClick={handleToAccept} style={{
                color:'white',
                width:'40%',
                margin: '4%',
                padding:'10px',
                border: '2px solid #F84464',
                borderRadius:'10px',
                cursor: 'pointer',
                backgroundColor:'#F84464'
             }}>Accept</Button>
        </DialogActions>
      </Dialog>
    </div>
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
              <div className="day">TODAY</div>
            </li>
            <li>
              <div className="date">08</div>
              <div className="day">TOM</div>
            </li>
            <li>
              <div className="date">09</div>
              <div className="day">SAT</div>
            </li>
            <li>
              <div className="date">10</div>
              <div className="day">SUN</div>
            </li>
          </ul>
          </div>
          
          
          <FaChevronRight size="20px" className="left-icon"/>

        </div>
        <div className="links-box">
        <ul>
          <li>
            <div className="links">
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
      
    {/* Show details container */}
      <div class="show-details"> 
       <div className='show-details-container'>
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
        

        {/* Show time Container */}
        <div className="show-time">
            <div className="show-time-container" onClick={handleClickToOpen}>
                    <a>07:35 PM</a>
            </div>

            <div className="prices-bubble">
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
    <div className='show-details-container'>
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
        
        <div className="show-time">
            <div className="show-time-container" onClick={handleClickToOpen}>
                    <a>07:35 PM</a>
            </div>
            <div className="prices-bubble">
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
    <div className='show-details-container'>
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
        
        <div className="show-time">
            <div className="show-time-container" onClick={handleClickToOpen}>
                    <a>07:35 PM</a>
            </div>
            <div className="prices-bubble">
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
    <div className='show-details-container'>
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
        
        <div className="show-time">
            <div className="show-time-container" onClick={handleClickToOpen}>
                    <a>07:35 PM</a>
            </div>
            <div className="prices-bubble">
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
    <div className='show-details-container'>
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
        
        <div className="show-time">
            <div className="show-time-container" onClick={handleClickToOpen}>
                    <a>07:35 PM</a>
            </div>
            <div className="prices-bubble">
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
    <div className='show-details-container'>
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
        
        <div className="show-time">
            <div className="show-time-container" onClick={handleClickToOpen}>
                    <a>07:35 PM</a>
            </div>
            <div className="prices-bubble">
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
    <div className='show-details-container'>
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
        
        <div className="show-time">
            <div className="show-time-container" onClick={handleClickToOpen}>
                    <a>07:35 PM</a>
            </div>
            <div className="prices-bubble">
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
    <div className='show-details-container'>
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
        
        <div className="show-time">
            <div className="show-time-container" onClick={handleClickToOpen}>
                    <a>07:35 PM</a>
            </div>
            <div className="prices-bubble">
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
                <div className="price-avail">
                    <span class="price">Rs. 100.00</span><br/>
                    <span class="class-seat">Normal</span><br/>
                    <span class="status">Available</span>
                </div>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
            <div class="show-time-container" onClick={handleClickToOpen}>
                <a>07:35 PM</a>
            </div>
        </div>
        

    </div>
             
    {modalOpen && <SeatModal setOpenModal={setModalOpen} />}
   </div>
   
   <Footer/>
    </div>
  );
}

export {BookShow};
