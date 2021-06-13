import React from 'react';
import Card from './Card';
import shopData from '../FakeData/ShopData.jsx'

const Service = () => {
    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Find Your Service</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                shopData.map((data) => <Card data={data} key={data.id} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;