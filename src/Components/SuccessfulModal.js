import React from "react";
import "./SuccessfulModal.css"

function SeatModal({setOpenModal}){
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
         
          <button>Ok</button>
        </div>
      </div>
    </div>
    );
}

export default SeatModal;