import React from "react";
import "./SuccessfulModal.css"
import { useNavigate } from 'react-router-dom';
function SuccessfulModal({setOpenModal}){
  const naviagate = useNavigate();
  const handleclick =()=>{
    naviagate('/')
  }
    return (
        <div className="modal-background">
      <div className="modal-container">
        <img class='done-icon' src={require('./Image/done_icon.png')}></img>
        <div className="body">
          <span>Payment Successful</span>
          <p>
            Your booking has been confirmed
          </p>
        </div>
        <div className="ok-button">
         
        <button onClick={()=> handleclick()}>Ok</button>
        </div>
      </div>
    </div>
    );
}

export default SuccessfulModal;