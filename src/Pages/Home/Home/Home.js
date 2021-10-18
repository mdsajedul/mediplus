import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './home.css'

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <div className="why-choose-us">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Why Choose Us?</h3>
                    </div>
                    <div className="col-lg-4">
                        <p>Nunc purus sodales quis, purus a arcu, ultricies dui, ipsum eget, massa metus sed. Odio arcu dolor, facilisis adipiscing nam mauris suspendisse.</p>
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