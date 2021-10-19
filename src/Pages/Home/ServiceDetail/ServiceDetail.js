import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import './serviceDetail.css'

const ServiceDetail = () => {
    const [service,setService] =useState([]);
    const {serviceId} = useParams()
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])


    const result = service.find(({id})=>id==serviceId);
    console.log(result)

    return (
        <div className=" m-4">
            <div className="row">
                <div className="col-lg-6">
                    <img src={result?.img} alt="" />
                </div>
                <div className="col-lg-6">
                    <h1>{result?.name}</h1>
                    <div className="px-3 ">
                        <h5>{result?.cat}</h5>
                        <p className="pt-3">{result?.detail}</p>
                        <p>{result?.detailPara}</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;