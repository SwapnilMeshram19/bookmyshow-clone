import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import ClearIcon from '@material-ui/icons/Clear';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styles from '../Styling/Summery.module.css';
import { useDispatch, useSelector } from 'react-redux';
import FoodCard from '../SummeryPage/FoodCard';

// import PaymentsPage from './PaymentsPage';
// import {handleAddTotalPrice} from "../../Redux/booking_details/actions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background: '#1F2533',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "white"
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




export const SummaryPage = () => {
  const classes = useStyles();
  let foodArray = [1, 2, 3, 4];
  let foodModalOpen = true;
  
  const handleCloseFoodModal = () => {
    foodModalOpen = false;
  }

  return (
    <div>
      <Dialog fullScreen open={foodModalOpen} onClose={handleCloseFoodModal} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseFoodModal}  aria-label="close">
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6" className={classes.appBar}>
              RRR
            </Typography>
            <Button autoFocus color="inherit" >
              <ClearIcon />
            </Button>
          </Toolbar>
        </AppBar>


        <div className={styles.container}>
          <FoodCard />

          <div className={styles.summeryPart}>
            <div>Booking Summery</div>
            <div className={styles.categories}>
              <div style={{ textTransform: 'uppercase' }}>Cinepolis</div>
              <div>Rs 700</div>
            </div>
            <span>AUDI 5</span>
            <div className={styles.categories}>
              <div style={{ fontSize: '12px', lineHeight: '25px' }}>Internet handeling fees</div>
              <div>Rs 28.00</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.categories}>
              <div>Sub total</div>
              <div>728</div>
            </div>

            {foodArray.length > 0 && <div style={{ fontSize: '12px' }} className={styles.categories}>
              <div>Food and beverages</div>
              <div> Rs. 500</div>
            </div>}

            <div className={styles.charity}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" />
                  <img src="https://in.bmscdn.com/webin/common/icons/bookasmile-logo.svg" alt="" />
                </div>
                <div>Rs 1</div>
              </div>
              <div style={{ fontSize: '12px', padding: "10px 20px" }}>
                <div>Re. 1 will be added to your transaction as a donation.</div>
                <div>Re.1/1 Ticket</div>
              </div>
            </div>

            <div style={{ fontSize: '12px', margin: '0 30px', fontWeight: '600' }}>Your current State is <a href="">NCR</a></div>
            <div className={styles.total}>
              <div>Amount Payable</div>
              <div>Rs 700</div>
            </div>
            <h3 className={styles.ticketType}>Select Ticket Type</h3>
            <div  className={styles.proceedBtn}>
              <div>Total : Rs 700</div>
              <div> Proceed</div>
            </div>
            <div className={styles.cancellation_policy}>You can cancel the tickets 20 min(s) before the show. Refunds will be done according to <a href="">Cancellation Policy</a></div>
          </div>
        </div>
      </Dialog>
      {/* <PaymentsPage proceed={proceed} /> */}
    </div>
  );
}
