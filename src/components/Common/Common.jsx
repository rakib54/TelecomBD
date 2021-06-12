import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}</h1>
                                    <h2 className="my-3 text-secondary">We take care of our customer</h2>
                                    <div className="mt-3">
                                        <NavLink to="/service" className="btn-home">{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 ">
                                    <img className="container-fluid header-img animated" src={props.mobile} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;