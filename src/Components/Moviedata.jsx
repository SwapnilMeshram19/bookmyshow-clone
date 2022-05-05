import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Footer from './Footer'
// import { Movie } from './Movie'
import './moviedata.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Moviedata = () => {
  const neavigate = useNavigate();
  const [item, setItems] = React.useState([])
  const [copyitem, setCopyItems] = React.useState([])

  const { id } = useParams();
  React.useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    //https://datajsonaaaasd.herokuapp.com/posts
    fetch(`https://datajsonaaaasd.herokuapp.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {

        setItems(res);
        setCopyItems(res);

      }).catch((err) => {
        console.log(err)
      })
  }
  const bookticket = () => {
    console.log("1")
    neavigate('/bookshow')
  }




  return (
    <>
      <Navbar />
      <div>



        <div className='background'>
          <img src={item.backgroundimg} alt="" />
        </div>

        <div className='upperimg'>

          <img src={item.poster} alt="" />
          <div className='uppertext'>
            <h2 style={{ color: "white" }}>{item.title}</h2>
            <h3 style={{ color: "white", display: "inline-block", margin: "0px", marginTop: "0px" }}> <span style={{ color: "red" }}>&#10084;</span> 90% <h5 style={{ color: "white", display: "inline-block", margin: "0px" }}> 642.6K rating</h5>   </h3>
            <div className='add'>
              <div className='addyour'>
                <h3 style={{ display: "inline-block", margin: "0px" }}>Add your rating & review</h3><br /><span>Your rating matter</span>
              </div>
              <button style={{ width: "90px", height: "35px", borderRadius: "10px", marginTop: "10px", border: "1px solid white" }}>Rate now</button>
            </div>
            <div style={{ backgroundColor: "whitesmoke", display: "inline-block", marginTop: "25px", padding: "7px", borderRadius: "5px" }}><h4 style={{ margin: "0px" }}>2D, 3D, IMAX 3D, IMAX 2D</h4></div>
            <br />

            <div style={{ backgroundColor: "whitesmoke", display: "inline-block", marginTop: "10px", padding: "7px", borderRadius: "5px" }}><h4 style={{ margin: "0px" }}>Telugu,Hindi,Malayalam,Kannada,Tamil</h4></div>

            <br />
            <div style={{ display: "inline-block", marginTop: "15px", padding: "7px", borderRadius: "5px" }}><h4 style={{ margin: "0px", color: "white" }}>3h 3m . Action, Drama, Historical, Period. UA. 25 Mar,2022</h4></div>

            <br />
            <button style={{ padding: "15px", border: "1px solid red", paddingLeft: "60px", paddingRight: "60px", borderRadius: "10px", backgroundColor: "red", color: "white" }} onClick={() => bookticket()}>Book tickets</button>
          </div>
        </div>












        <div className="downtext">

          <div className='about'>
            <h2>About the movie</h2>
            <p>{item.title}  ipsum dolor sit amet consectetur, adipisicing elit. Velit veniam eveniet eius rem quos nemo. Ratione nemo iusto quis natus reiciendis doloremque nesciunt architecto, optio adipisci ad molestias quod necessitatibus laborum illo saepe minus itaque culpa. Necessitatibus voluptatibus ut a minus facere ea cupiditate sunt at, dignissimos corrupti accusamus facilis! </p>
          </div>
          <hr />
          <div className="offer">
            <h2>Applicable offers</h2>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkixSerJT9EQG8rO6XuC5ZOgrR00DIO_ds7I1z4BF_TEksnu3p" alt="" />
          </div>

          <hr />



          <h2>Cast</h2>
          <div className="cast">
            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg" alt="" />
              <p>Jr.NTR</p>
              <span>Actor</span>
            </div>
            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ram-charan-teja-1046368-19-09-2017-02-37-43.jpg" alt="" />
              <p>Ram Charan</p>
              <span>Actor</span>
            </div>
            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg" alt="" />
              <p>Ajay Devgn</p>
              <span>Actor</span>
            </div>
            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/alia-bhatt-21065-13-09-2017-04-53-45.jpg" alt="" />
              <p>Alia Bhatt</p>
              <span>Actor</span>
            </div>

            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/samuthirakani-1052542-24-03-2017-17-46-22.jpg" alt="" />
              <p>Samuthirakani</p>
              <span>Actor</span>
            </div>

            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ray-stevenson-15927-24-03-2017-12-47-42.jpg" alt="" />
              <p>Ray Stevenson</p>
              <span>Actor</span>
            </div>

          </div>




          <hr />
          <h2>Crew</h2>
          <div className="cast">
            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/s-s-rajamouli-29189-07-10-2020-04-30-40.jpg" alt="" />
              <p>S. S. Rajamouli</p>
              <span>Director</span>
            </div>
            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/d-v-v-danayya-iein008889-24-03-2017-14-03-39.jpg" alt="" />
              <p>D V V Danayya</p>
              <span>Producer</span>
            </div>
            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/m-m-keeravani-1057248-21-02-2018-11-05-59.jpg" alt="" />
              <p>M. M. Keeravani</p>
              <span>Musician</span>
            </div>
            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/senthil-kumar-iein005633-24-03-2017-13-04-32.jpg" alt="" />
              <p>Senthil Kumar</p>
              <span>Cinematographer</span>
            </div>

            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/a.-sreekar-prasad-iein008770-24-03-2017-14-02-53.jpg" alt="" />
              <p>A. Sreekar Prasad</p>
              <span>Editor</span>
            </div>

            <div>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jayantilal-gada-1091941-11-04-2018-05-37-23.jpg" alt="" />
              <p>Dr. Jayantilal Gada</p>
              <span></span>
            </div>

          </div>


          <hr />

          <h2>Top reviews</h2>

          <p style={{ color: "gray" }}>Summary of 392.9K reviews.</p>



          <div className="review">

            <div style={{ width: "42%", border: "1px solid gray", padding: "2%" }}>

              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "2%" }}>
                  <img style={{ borderRadius: "50%", width: "30px" }} src="https://in.bmscdn.com/in/synopsis-new/noimguser.jpg" alt="" />
                </div>
                <div style={{ marginTop: "-12px", marginRight: "45%" }}>
                  <p style={{ display: "inline-block" }}>BookMyShow User</p>
                </div>
                <div style={{ marginTop: "-12px" }}>
                  <p ><span style={{ color: "red" }}>	&#9829;</span>100%</p>
                </div>

              </div>

              <div>
                #SuperDirection #GreatActing #Blockbuster #WowMusic #Rocking #AwesomeStory #Unbelievable
                We would never expect rajamouli direction,every time something new,it was awesome and fabulous

              </div>


            </div>






            <div style={{ width: "42%", border: "1px solid gray", padding: "2%" }}>

              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "2%" }}>
                  <img style={{ borderRadius: "50%", width: "30px" }} src="https://in.bmscdn.com/in/synopsis-new/noimguser.jpg" alt="" />
                </div>
                <div style={{ marginTop: "-12px", marginRight: "65%" }}>
                  <p style={{ display: "inline-block" }}> User</p>
                </div>
                <div style={{ marginTop: "-12px" }}>
                  <p ><span style={{ color: "red" }}>	&#9829;</span> 100%</p>
                </div>

              </div>

              <div>
                #SuperDirection #GreatActing #Blockbuster #WowMusic #Rocking #AwesomeStory #Unbelievable
                We would never expect rajamouli direction,every time something new,it was awesome and fabulous

              </div>


            </div>







          </div>
          <hr />

        </div>

      </div>
      <Footer />
    </>
  )
}

export { Moviedata }