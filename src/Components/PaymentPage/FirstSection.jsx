import React from 'react'
import './Firstpayment.css'
const FirstSection = () => {
  return (
    <div>
      <div className='two'>
        <div>

<div className='share'>
<div className='sharecontact'><h3>Share your contact details</h3></div>
<div className='address'>
    <input type="text" placeholder='Email Address' />
    <input type="number" placeholder='Mobile number'/>
    <div>CONTINUE</div>
</div>
</div>



<div className="payment">
<div className="morepayment"><h3>More Payment options</h3></div>
<div className='boxpayment'>
<div className="option">
  <div>Quick pay</div>
  <div style={{backgroundColor: "white"}}>Credit/Debit card</div>
  <div>Net Banking</div>
  <div>Mobile wallet</div>
  <div>Gift Voucher</div>
  <div>UPI</div>
  <div>Redeem Points</div>
  <div>Credit Voucher</div>

</div>
<div className="cartpayment">
<p>Enter your card details</p>
<div className='cl'>
  
  <div className='cardnumber'>
<p>Card Number</p>
<input type="number"placeholder='2222 3333 4444 5555'/>
<input type="text" placeholder='Vikalp Varshney' />
</div>
<div className='extra'>
<div className='expiry'>
<p style={{margin: "0px", marginBottom: "4px" }}>Expiry</p>
  <input type="number" placeholder='06' />
  <input type="number" placeholder='22' />
</div>
<div className='CVV'>
<p style={{margin: "0px", marginBottom: "4px" }}>CVV</p>
<input type="number" placeholder='989' />
</div>
  </div>
</div>
<div className='paymentbtn'>
<button>MAKE PAYMENT</button>
</div>
</div>
</div>


</div>
</div>


<div className='bookingsummery'>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkhh4gYj5JHj1JVKC33H2PkOLg3i1elpoHcdupBQmBVD1k31A" alt="" />
</div>


</div>
    </div>
  )
}

export default FirstSection