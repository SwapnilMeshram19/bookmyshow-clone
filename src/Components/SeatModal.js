import React from "react";
import "./SeatModal.css"

function SeatModal({setOpenModal}){
    return (
        <div className="modal-background">
      <div className="modal-container">
        <div className="title">
          <h3>How Many Seats?</h3>
        </div>
        <div className="body">
        </div>
        <div className="select-button">
         
          <button>Select Seats</button>
        </div>
      </div>
    </div>
    );
}

export default SeatModal;