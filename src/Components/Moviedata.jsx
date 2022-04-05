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
        









<img src={item.poster} alt="" />




        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzPSk3beNwfqsK5mQmHND8bozEMNYAT1WlA&usqp=CAU" alt="" /> */}
{/* <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUIOnAM9hT0-_XB39o_3j6wTeaQdTSDNweyJLTY9HvdQSak7e_" alt="" /> */}
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