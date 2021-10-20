import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services] = useServices();
    return (
        <div id="services">
            <div className="row gx-0">
                <div className="col-lg-4">
                    <div className=" col-lg-6  services-card ">
                        <h2>Our Services</h2>
                        <p>Monitoring and diagnostics</p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row gx-0">
                        {
                           services.map(service=><Service
                            key={service.id} 
                            service={service}
                           ></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;