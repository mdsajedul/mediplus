import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = ({service}) => {
    const {id,name,cat,detail,img} = service;
    return (
        <div className="col-lg-6 gy-1 p-4 service-style">
            <div className="service-card">
                <div className="img-container">
                    <img className="img-style" src={img} alt="" />
                </div>
                <div className="service-content">
                    <h5>{name}</h5>
                    <p>{detail.substr(0,145)}...</p>
                    <Link to={`/services/${id}`}>
                        <button className="btn-services">Details</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;