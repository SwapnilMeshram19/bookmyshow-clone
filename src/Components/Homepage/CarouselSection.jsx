import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const dataSet = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1648706902319_group.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1649075814687_recent.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1643608159306_fb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1649315336416_kgfnewweb.jpg"
]

const CarouselSection = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{ padding: "10px 0px", width: "100%"}}>
            <Carousel slidesToSlide={1} swipeable renderDotsOutside={false} showDots responsive={responsive} removeArrowOnDeviceType={["mobile"]} autoPlay infinite>
                {
                    dataSet?.map((banner, index) => (
                        <div style={{width: "100%",height: "100%"}} key={index + 1}>
                            <img style={{ width: "100%", height: "100%", cursor: "pointer" }} src={banner} alt="Advertisement banner" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export {CarouselSection}
