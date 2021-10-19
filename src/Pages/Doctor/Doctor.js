import React from 'react';
import './doctor.css';

const Doctor = (props) => {
    const {doctor} = props;
    
    return (
        <div className="col-lg-4 p-3 ">
           <div className="card card-style" >
                <img src={doctor?.img} className="card-img-top" alt="..."/>
                <div className="card-body">
               <h5 className="card-title">{doctor?.name}</h5>
           </div>
           <ul className="list-group list-group-flush">
                <li className="list-group-item">Specialties: {doctor?.specialties}</li>
                <li className="list-group-item">Experience: {doctor?.experience}</li>
                <li className="list-group-item">Email :{doctor?.email}</li>
            </ul>
           </div>
          
        </div>
    );
};
export default Doctor;