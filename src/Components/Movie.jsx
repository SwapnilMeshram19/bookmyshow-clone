import React from 'react'
import './Movie.css'

const Movie = () => {
    const [item , setItems] = React.useState([])
    const [copyitem,setCopyItems]=React.useState([])

    React.useEffect(()=>{
        getData()
    },[])

    const getData =()=>{
        fetch(`http://localhost:3004/posts`)
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

    // const payloadjson=JSON.stringify(payload);
    // fetch(`http://localhost:3004/posts`,{
    //     method:"POST",
    //     body:payloadjson,
    //     headers:{
    //         "content-type":"application/json"
    //     }
    // }).then((res)=>{
    //     // console.log(res)
    //     getData()
    // })
    const showAll=()=>{
        setCopyItems(item)
        // updateValue()
      }
    const hindi =()=>{
        const updatedata = item.filter((post) => post.langauage==="Hindi")
        setCopyItems(updatedata)
    }
    const english =()=>{
        const updatedata = item.filter((post) => post.langauage==="English")
        setCopyItems(updatedata)
    }
    const telegue =()=>{
        const updatedata = item.filter((post) => post.langauage==="Telugue")
        setCopyItems(updatedata)
    }

    const tamil =()=>{
        const updatedata = item.filter((post) => post.langauage==="Tamil")
        setCopyItems(updatedata)
    }
    const punjabi =()=>{
        const updatedata = item.filter((post) => post.langauage==="Punjabi")
        setCopyItems(updatedata)
    }
    const marathi =()=>{
        const updatedata = item.filter((post) => post.langauage==="Marathi")
        setCopyItems(updatedata)
    }
const handleClick =(posti)=>{
    console.log(posti)
}
    // Marathi
  return (
  
    
    <div className='container'>
     
       <div >
         <h2>Filters</h2>
       <div className='btn'>
         <p style={{margin: "0px" , marginLeft: "15px" , display: "inline-block" ,marginRight: "120px"} }>Languages</p>
        {/* <button onClick={()=>showAll()}>Show All</button> */}
        <div onClick={()=> showAll()} style={{display: "inline-block"}} >Clear</div>
        <button onClick={()=>hindi()}>Hindi </button>
        <button onClick={()=>english()}>English</button>
        <button onClick={()=>telegue()}>Telugue</button>
        <button onClick={()=>tamil()}>Tamil</button>
        <button onClick={()=>punjabi()}>Punjabi</button>      
        <button onClick={()=>marathi()}>Marathi</button> 
        </div>
        </div> 
        <div className='product'>

          <h2>Movie in Delhi-NCR</h2>
         
        <button onClick={()=>hindi()}>Hindi </button>
        <button onClick={()=>english()}>English</button>
        <button onClick={()=>telegue()}>Telugue</button>
        <button onClick={()=>tamil()}>Tamil</button>
        <button onClick={()=>punjabi()}>Punjabi</button>      
        <button onClick={()=>marathi()}>Marathi</button> 

        <div className='comingsoon'>
<h2 style={{display: "inline-block", marginLeft: "30px"}}>Coming Soon</h2>
 <span style={{ display: "flex" , flexDirection: "row-reverse" ,marginTop:"-40px",marginRight: "40px" , color: "darkred"}}>Explore Upcoming Movies</span>
        </div>
      <div className='posts' >




      {
        copyitem.map(post => {
          return(
            <div key={post.id} className='poster' onClick={()=> handleClick(post.id )} >
          
            <div className='posterimg' > <img src={post.poster} style={{width: "100%" , height: "100%" , borderRadius: "10px"}} /> </div>
            <div className='postertitle'>
            <h4 style={{margin: "0px"}}>{post.title}</h4>
            <p style={{margin: "0px"}}>{post.tag}</p>
            <p style={{margin: "0px"}}>{post.langauage} </p>
            </div>
            </div>
           
          )
        })
      }
        
      </div>
    </div>

    </div>
  )
}

export  {Movie}
