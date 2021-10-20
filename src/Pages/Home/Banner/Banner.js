import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../../Images/banner/one.jpg'
import two from '../../../Images/banner/two.jpg'
import three from '../../../Images/banner/three.jpg'
import "./banner.css";
import { Link } from 'react-router-dom';
import "../../Shared/Styles/style.css"

const Banner = () => {
    return (
        <div>
           <Carousel fade variant="dark">
                <Carousel.Item>
                    
                    <img
                    className="d-block w-100 image-style img-fluid"
                    src={one}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1 className="text-color-one banner-content" >We will provide our parents a healthy life</h1>
                            <Link to="/about">
                                <button className="btn-regular">About Us</button>
                            </Link>
                            
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image-style img-fluid"
                    src={two}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1 className="text-color-one banner-content" >We will provide our parents a healthy life</h1>
                            <Link to="/about">
                                <button className="btn-regular">About Us</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image-style img-fluid"
                    src={three}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1 className="text-color-one banner-content">We will provide our parents a healthy life</h1>
                            <Link to="/about">
                                <button className="btn-regular">About Us</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;