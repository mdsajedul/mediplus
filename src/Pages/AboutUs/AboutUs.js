import React from 'react';
import medi from '../../Images/other/medi.jpg'
import './aboutUs.css'

const AboutUs = () => {
    return (
        <div className="my-5 px-5">
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center my-3">
                    <div className=" image-container">
                        <img className="about-img" src={medi} alt="" />
                    </div>
                    
                </div>
                <div className="col-lg-6 d-flex justify-content-conter align-items-center my-3">
                    <div className="about-content px-4">
                        <h1>We Are <span className="text-primary">Mediplus</span>  A Medical Clinic</h1>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p><i>“Faithful to our tradition, we provide the highest possible standard of care and treatment in a professional and compassionate manner to every person who avails of our services”</i></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;