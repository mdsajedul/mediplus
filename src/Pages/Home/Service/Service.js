import React from 'react';
import './service.css'

const Service = ({service}) => {
    const {id,name,cat,detail,img} = service;
    return (
        <div className="col-lg-6 gy-1 p-5 service-style">
            <div>
                <img className="img-style" src={img} alt="" />
                <h5>{name}</h5>
                <p>{detail.substr(0,145)}...</p>
                <button>Details</button>
            </div>
        </div>
    );
};

export default Service;