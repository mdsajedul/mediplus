import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <div className="row">
                <div className="col-lg-4">
                    <div>
                        <h1>Services</h1>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
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