import React from 'react';
import './Contacts.css';
import '../Shared/Styles/style.css'

const Contacts = () => {
    return (
        <div className="my-2">
            <div className="p-5">
                <h2 className="text-center contact-heading">Contact with us</h2>
            </div>
            <div className="row g-0 contacts-container">
                <div className="col-lg-6">
                    <div className="px-5">
                        <div className="card p-3 my-2">
                            <p><b>Office location –</b>  our office consists of three buildings and is located in the heart of the city. You can easily reach us by metro or by land transport.</p>
                        </div>
                        <div className="card p-3  my-2">
                           <p><b>Monday to Friday: </b>9:00 AM to 6:00 PM</p>
                           <p><b>Saturday: </b>9:00 AM to 5:00 PM</p>
                           <p><b>Sunday: </b> Closed</p>
                        </div>
                        <div className="card p-3  my-2">
                            <address><b>Address: </b>685 Lane Drive St. California, 33020</address>
                            <p><b>Phone:</b> +010 234 7892 34</p>
                            <p><b>Fax:</b> +010 435 5798982</p>
                            <p><b>Email: </b> info@nordis.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 px-3">
                    <div className="card p-4">
                        <div>
                            <input type="text" name="" id="" placeholder="Name" />
                            <input type="text" name="" id="" placeholder="Email" />
                            <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                            <button className="btn-regular">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;