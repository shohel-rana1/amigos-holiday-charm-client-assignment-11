import React from 'react';
import logo1 from '../../images/pexels-photo-3278215.jpeg';
const OurBlogs = () => {
    return (
        <div className="backgrnd-img">
            <div className="container py-5">
                <div className="row g-2">
                    <div className="image col-md-6">
                        <img className="img img-fluid" style={{ height: '550px', width: '350px' }} src={logo1} alt="" />
                    </div>
                    <div className="text-left col-md-6">
                        <h1>Who We Are?</h1>
                        <p>Travel blogs nowadays are starting to look all the same, with generic off-the-shelf templates, difficult navigation, way too many unnecessary pop-ups and don't get me started on scroll hijacking (why do people do this?).</p>
                        <h1>Our Mission</h1>
                        <p>To promote great design in the travel industry, I have decided to scour the internet in search for the best travel blogs out there that have great user experience, excellent storytelling, and websites that pushed the envelope of what travel blogs can be.</p>
                        <h1>Our Vision</h1>
                        <p>I believe it is because creating websites have become more accessible and blogs can be easily built with automated tools.so I will work with that</p>
                        <h1>Our Promise</h1>
                        <ul>
                            <li>Be polite and respectful.</li>
                            <li>Protect your privacy.</li>
                            <li>To give the best service to client </li>
                            <li>Provide a safe journey with best guide</li>
                            <li>Listen to your problems with utmost interest.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurBlogs;