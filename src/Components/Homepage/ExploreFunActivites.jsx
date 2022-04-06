import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import styles from "styled-components";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const Div = styles.div`
    margin: 50px 0px;
    .contentText {
        width: 78%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .contentText h2 {
        font-weight: 700;
        margin-bottom: 0px;
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
        color: #333;
        font-size: 1.2rem;
        margin: 10px 0;
        // word-break: break-word;
	
    }
    .genre {
        width: 100%;
        // word-break: break-word;
        color: rgb(102, 102, 102);
        font-size: .9rem;
        line-height: 1.5;
        font-weight: 550;
    }
    
`

const data1 = [
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA2NDdrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094579-ewsrxuwgrd-portrait.jpg",
        title: "RRR",
        genre: "Action/Drama/Historical/Period"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00107994-bwncltsnkm-portrait.jpg",
        title: "Attack-Part 1",
        genre: "Action/Sci-Fi/Thriller"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1NDNrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00110845-rrqrvaanpt-portrait.jpg",
        title: "The Kashmir Files",
        genre: "Drama/Historical"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00078838-gvjcxvmwfk-portrait.jpg",
        title: "Morbius",
        genre: "Action/Adventure/Sci-Fi"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODklICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00324662-mkevlerxbs-portrait.jpg",
        title: "Lekh",
        genre: "Drama/Romantic"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTFrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00319643-lmnmnkazpr-portrait.jpg",
        title: "Fantastic Beasts: The Secrets of Dumbledore",
        genre: "Adventure/Family/Fantasy"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICAxMzRrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00114897-mqwalhlwcp-portrait.jpg",
        title: "Gangubai Kathiawadi",
        genre: "Biography/Crime/Drama"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122565-xnlxlhbcuc-portrait.jpg",
        title: "King Richard",
        genre: "Biography/Drama/Sports"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODMlICA5NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00129624-zcqwfqpkgw-portrait.jpg",
        title: "The Batman",
        genre: "Action/Adventure/Crime/Drama"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA0NjBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310790-sjaqddgbsy-portrait.jpg",
        title: "Spider-Man: No Way Home",
        genre: "Action/Adventure/Sci-Fi"
    }
]

export const ExploreFunActivites = () => {
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
                    <h2>Explore Fun Activites</h2>
                    <Link to="/ncr/movies" className="link">See all <RiArrowRightSLine /></Link>
                </div>
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

            {/* <div>
                <Link to="/" href="#">Home</Link>
            </div> */}
        </>
    )
}
