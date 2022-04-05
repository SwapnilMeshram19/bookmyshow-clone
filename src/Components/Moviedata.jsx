import React from 'react'
import { useParams } from 'react-router-dom'
// import { Movie } from './Movie'
import './moviedata.css'
const Moviedata = () => {
  const [item , setItems] = React.useState([])
  const [copyitem,setCopyItems]=React.useState([])

  const {id} = useParams();
  React.useEffect(()=>{
    getData()
},[])

const getData =()=>{
    fetch(`http://localhost:3004/posts/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
        // console.log(res)
        setItems(res);
        setCopyItems(res);
        // updateValue()
        
        // console.log(item);
        // console.log(copyitem);
      }).catch((err)=>{
        console.log(err)
      })
}




  return (
    <div>
        










<div className='background'>
<img src={item.backgroundimg} alt="" />
</div>

<div className='upperimg'>

<img src={item.poster} alt="" />
<div className='uppertext'>
<h2 style={{color: "white"}}>{item.title}</h2>
<h3 style={{color: "white",display: "inline-block", margin: "0px", marginTop: "0px"}}> <span style={{color: "red"}}>&#10084;</span> 90% <h5 style={{color: "white", display: "inline-block",margin: "0px" }}> 642.6K rating</h5>   </h3>
<div className='add'> 
  <div className='addyour'>
  <h3 style={{display: "inline-block", margin: "0px"}}>Add your rating & review</h3><br /><span>Your rating matter</span>
 </div >
 <button style={{width: "90px", height: "35px" , borderRadius: "10px" ,marginTop: "10px"}}>Rate now</button>
 </div>
 <div style={{backgroundColor: "whitesmoke" , display: "inline-block" ,marginTop: "25px" , padding: "7px" , borderRadius: "5px"}}><h4 style={{margin: "0px"}}>2D, 3D, IMAX 3D, IMAX 2D</h4></div>






</div>
</div>





<div className='about'>
  <h2>About the movie</h2>
  <p>RRR is a period drama set in India during the 1920s, revolving around the inspiring journey of two of India`s freedom fighters - Alluri Sitarama Raju and Komaram Bheem.</p>
</div>
 <div className="offer">
   <h2>Applicable offers</h2>
   <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkixSerJT9EQG8rO6XuC5ZOgrR00DIO_ds7I1z4BF_TEksnu3p" alt="" />
 </div>





 
 <div className="cast">
<div>
  <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg" alt="" />
  <p>Jr.NTR</p>
  <span>Actor</span>
</div>
<div>
  <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg" alt="" />
  <p>Jr.NTR</p>
  <span>Actor</span>
</div>
<div>
  <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg" alt="" />
  <p>Jr.NTR</p>
  <span>Actor</span>
</div>
<div>
  <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg" alt="" />
  <p>Jr.NTR</p>
  <span>Actor</span>
</div>

<div>
  <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg" alt="" />
  <p>Jr.NTR</p>
  <span>Actor</span>
</div>


 </div>

    </div>
  )
}

export  {Moviedata}