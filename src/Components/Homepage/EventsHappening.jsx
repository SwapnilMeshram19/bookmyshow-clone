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
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325212-ygyalvhhtx-portrait.jpg",
        title: "Feminist Bharat- a standup comedy show",
        genre: "Akshara Theatre (Open Air Amphitheatre) Delhi 1.4 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325485-xepukrgehw-portrait.jpg",
        title: "Mazaak Hai Ye- a standup comedy show",
        genre: "Akshara Theatre Delhi 1.4 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323445-xgtkxzartt-portrait.jpg",
        title: "Ab Hai Apki Bari- a standup comedy show",
        genre: "Akshara Theatre Delhi 1.4 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00322715-zkujcehegq-portrait.jpg",
        title: "Mohit Dudeja Live",
        genre: "Akshara Theatre Delhi 1.4 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA2IEFwciBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325709-ahpcacvtru-portrait.jpg",
        title: "Dandiya Utsav 2.0",
        genre: "Informal By Inperfecto: Janpath 1.9 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325427-mbafdwnkxj-portrait.jpg",
        title: "Khusrau - Kabir",
        genre: "Kamani Auditorium Delhi 2.3 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBBcHIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325263-xhnpusejfh-portrait.jpg",
        title: "Comedy All-Stars: Anirban Dasgupta Live",
        genre: "L.T.G Auditorium Delhi 2.4 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBBcHIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00323534-lnxumaudmf-portrait.jpg",
        title: "Comedy All-Starts",
        genre: "L.T.G Auditorium Delhi 2.4 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324359-nhecyajmva-portrait.jpg",
        title: "CHAND MERA DIL",
        genre: "India Islamic Cultural Centre Delhi 2.7 kms away"
    },
    {
        link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxMyBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325747-ygbjvtkqbn-portrait.jpg",
        title: "Comedy Show by Vijay, Vrinda & Swati",
        genre: "SuperTalks: New Delhi 4.7 kms away"
    }
]

export const EventsHappening = () => {
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
                    <h2>Events Happening Near You</h2>
                    <Link to="/movie" className="link">See all <RiArrowRightSLine /></Link>
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
        </>
        
    )
}
