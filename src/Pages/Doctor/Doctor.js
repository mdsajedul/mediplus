import React from 'react';
import './doctor.css';

const Doctor = ({doctor}) => {
    const {name,experience,specialties,email,img} = doctor;
    console.log(specialties)
    return (
        <div className="col-lg-4 p-3 ">
           <div className="card card-style" >
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
               <h5 className="card-title">{name}</h5>
           </div>
           <ul className="list-group list-group-flush">
                <li className="list-group-item">Specialties: {specialties}</li>
                <li className="list-group-item">Experience: {experience}</li>
                <li className="list-group-item">Email :{email}</li>
            </ul>
           </div>
          
        </div>
    );
};
export default Doctor;