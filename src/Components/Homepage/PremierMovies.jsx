import React from "react";
import styles from "styled-components";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const Div = styles.div`
    margin: 50px 0px;
    padding: 20px 0;
    background-color: #2B3148;
    .contentText {
        width: 78%;
        margin: auto;
        // display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
    }

    .contentText span {
        cursor: pointer;
    }

    @media screen and (max-width: 720px){
        display: none
    }

    .contentText h2 {
        font-weight: 700;
        margin-bottom: 0px;
        color: white;
    }
    .contentText .link {
        font-size: 18px;
        color: crimson;
    }
    .entertainment_container {
        width: 80%;
        // margin: auto;
        margin-left: 11%;
        margin-top: 1%
    }
`

const Wrapper = styles.div`
    width: 80%;
    margin: 0px;
    font-family: Roboto, sans-serif;
    transition: .3s;
    cursor: pointer;

    img {
        width: 222px;
        height: 378px;
        border-radius: 10px;
    }
    .title {
        width: 100%;
        font-weight: 600;
        color: white;
        font-size: 1.2rem;
        margin: 10px 0;
        // word-break: break-word;
	
    }
    .genre {
        width: 100%;
        // word-break: break-word;
        color: white;
        font-size: .9rem;
        line-height: 1.5;
        font-weight: 550;
    }
    
`

const data1 = [
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00317616-kygdjufyfl-portrait.jpg",
        title: "The Assassination of JFK",
        genre: "English"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00324874-kggfxppmeu-portrait.jpg",
        title: "The East (2021)",
        genre: "English"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00324435-gwyphxhdys-portrait.jpg",
        title: "The House Next Door: Meet the Blacks 2",
        genre: "English"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00078838-gvjcxvmwfk-portrait.jpg",
        title: "The Matrix Resurrections",
        genre: "English"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00320491-thctbtqjbc-portrait.jpg",
        title: "Sing 2",
        genre: "English"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00321598-zgqnhahsxd-portrait.jpg",
        title: "Falling",
        genre: "English"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00324772-dutbmystfx-portrait.jpg",
        title: "Spider-Man: No Way Home (Movie + Extra Content)",
        genre: "English"
    }
]


export const PremierMovies = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <>
            <Div >
                <div className="contentText">
                    <span><img style={{width: "1230px"}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" /></span>
                    <h2>Premieres</h2>
                </div>
                <span style={{ color: "white", marginLeft: "11%" }}>Brand new releases every Friday</span>
                <div className="entertainment_container">
                    <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={false} >
                        {
                            data1?.map((image, index) => (
                                <Wrapper  key={index + 1}> 
                                    <img src={image.link} alt="Recommended" />
                                    <div className="title">{image.title}</div>
                                    <div className="genre">{image.genre}</div>
                                </Wrapper>
                            ))
                        }
                    </Carousel>
                </div>
            </Div>
        </>
        
    )
}