import React from 'react';
import './notFound.css';
import '../Shared/Styles/style.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=" d-flex justify-content-center align-items-center">
            <div className="not-found">
                <h1>404</h1>
                <p>OPPS! PAGE NOT FOUND</p>
                <p>Sorry, the page you're looking for doesn't exist</p>
                <Link to="/home"> <button className="btn-regular">Return Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;