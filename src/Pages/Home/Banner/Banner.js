import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../../Images/banner/one.jpg'
import two from '../../../Images/banner/two.jpg'
import three from '../../../Images/banner/three.jpg'
import "./banner.css";
import "../../Shared/Styles/style.css"

const Banner = () => {
    return (
        <div>
           <Carousel fade variant="dark">
                <Carousel.Item>
                    
                    <img
                    className="d-block w-100 image-style"
                    src={one}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1 className="text-color-one" >We will provide our parents a healthy life</h1>
                            <button className="btn-regular">About Us</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image-style"
                    src={two}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1 className="text-color-one" >We will provide our parents a healthy life</h1>
                            <button className="btn-regular">About Us</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image-style"
                    src={three}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1 className="text-color-one">We will provide our parents a healthy life</h1>
                            <button className="btn-regular">About Us</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;