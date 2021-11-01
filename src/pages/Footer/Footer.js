import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="bgColor px-5 py-4">
                <div className="row g-5 mx-auto container">
                    <div className="text-left col-md-4">
                        <h3>Doctors Care Hospital</h3>
                        <p>Doctors Care  Hospital is the Best Hospital in Bangladesh. <br /> We are a 250 bedded multi-disciplinary tertiary-care Hospital, <br /> situated at Banai, Dhaka.which is one <br /> of the top Conglomerates in Bangladesh</p>
                    </div>
                    <div className="block icon-list text-left col-md-4">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><i className="fab fa-facebook-square icon"></i>&nbsp;Facebook</li>
                            <li><i className="fab fa-twitter icon"></i>&nbsp;Twitter</li>
                            <li><i className="fas fa-share-square icon"></i>&nbsp;Share Square</li>
                            <li><i className="fab fa-google-plus-g icon"></i>&nbsp;Google Plus</li>
                        </ul>

                    </div>
                    <div className="list-style text-left col-md-4 ">
                        <h3>Legal</h3>
                        <h6>Privacy Policy</h6>
                        <h6>Terms And Conditions</h6>
                        <h6>Authorization and authentication</h6>

                    </div>
                </div>
            </div>
            <div className="mx-auto bg-clr py-3">
                <p><i className="far fa-copyright"></i>&nbsp;2021 Doctors Care Hospital, LLC. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;