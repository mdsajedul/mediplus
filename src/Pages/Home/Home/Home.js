import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './home.css'

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="why-choose-us">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Why Choose Us?</h3>
                    </div>
                    <div className="col-lg-4">
                        <p>A large number of international patients choose Continental Hospitals because of our expert team of doctors, devoted staff and state-of-the-art infrastructure.</p>
                    </div>
                    <div className="col-lg-4">
                        <h5>Booking now</h5>
                        <p>24/7 service available</p>
                    </div>
                </div>
            </div>

            <Services></Services>

        </div>
    );
};

export default Home;