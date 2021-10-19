import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <div className="row">
                <div className="col-lg-4 p-3">
                    <h4>Services</h4>
                    <small>
                    <p><u>Balanced care</u></p>
                    <p><u>Available 24/7</u></p>
                    <p><u>Daily care experts</u></p>
                    <p><u>No long term contract</u></p>
                    </small>
                    
                </div>
                <div className="col-lg-4 p-3">
                    <h4>Keep in touch </h4>
                    <div className="social-icon">
                                <a  rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
                                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter-square"></i></a>
                                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                            </div>
                </div>
                <div className="col-lg-4 p-3">
                    <h4>Subscribe our newsletter</h4>
                    <div className= "upper-componet">
                        <input className="" type="text" placeholder="Email" /> <br/>
                        <button className="btn-subscribe">Subscribe Now</button>
                    </div>
                </div>
            </div>
            <hr />
            <small><p className="text-center">Copyright© <span className="text-primary">Mediplus </span> 2021</p></small>
        </div>
    );
};

export default Footer;