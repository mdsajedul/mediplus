import React from 'react';
import useDoctors from '../../Hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
import './doctors.css';

const Doctors = () => {
    const [doctors] = useDoctors();
    
    return (
        <div>
            <div className="doctors-header">
                <h1>Doctors</h1>
            </div>
            <div>
                <div className="row px-4 my-4 gx-0 gy-4">
                    {
                        doctors.map(doctor=><Doctor
                            key={doctor.name}
                            doctor={doctor}
                            ></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;