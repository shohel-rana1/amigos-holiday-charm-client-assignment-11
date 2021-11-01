import React from 'react';
import OurBlogs from '../OurBlogs/OurBlogs';
import PlaceAndPackage from '../PlaceAndPackage/PlaceAndPackage';
import Trendings from '../Trendings/Trendings';

const Home = () => {
    return (
        <div>
            <PlaceAndPackage></PlaceAndPackage>
            <Trendings></Trendings>
            <OurBlogs></OurBlogs>
        </div>
    );
};

export default Home;