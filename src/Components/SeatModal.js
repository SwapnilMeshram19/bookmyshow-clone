import { Modal } from "@material-ui/core";
import React from "react";
import "./SeatModal.css"

function SeatModal({setOpenModal}){
    return (
        <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button> */}
        </div>
        <div className="title">
          <h3>How Many Seats?</h3>
        </div>
        <div className="body">
          <p></p>
        </div>
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button> */}
          <button>Select Seats</button>
        </div>
      </div>
    </div>
    );
}

export default SeatModal;