import React from 'react';
import { Row } from 'react-bootstrap';
import useTrendings from '../../hooks/useTrendings';
import TrendingPlace from '../TrendingPlace/TrendingPlace';

const Trendings = () => {
    const [trendings] = useTrendings();
    return (
        <>
            <div className="">
                <div className="text-left pt-5 mx-5">
                    <h1 style={{ color: '#069CAD' }} className="fs-1">Trendings Tour Destinations</h1>
                </div>
                <div className="backgrnd-img container-fluid px-4 p-md-5">
                    <Row xs={1} md={3} lg={3} xl={4} className="g-4">
                        {
                            trendings.map(trend => <TrendingPlace
                                key={trend.key}
                                trend={trend}
                            ></TrendingPlace>)
                        }
                    </Row>
                </div>
            </div>
        </>
    );
};


export default Trendings;