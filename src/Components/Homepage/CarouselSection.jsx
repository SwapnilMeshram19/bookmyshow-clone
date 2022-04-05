import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const dataSet = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1648706902319_group.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1649075814687_recent.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1643608159306_fb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1649064174828_bassiweb.jpg"
]

const CarouselSection = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{ padding: "5px 0px"}}>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]} autoPlay infinite>
                {
                    dataSet?.map((banner, index) => (
                        <div style={{ padding: "0px 55px", margin: "0px 100px 0px 5px"}} key={index + 1}>
                            <img style={{ width: "1250px", height: "320px", cursor: "pointer" }} src={banner} alt="Advertisement banner" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export {CarouselSection}
