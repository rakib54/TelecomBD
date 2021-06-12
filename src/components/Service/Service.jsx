import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = () => {
    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Find Your Service</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src="" className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;