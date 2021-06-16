import React from 'react';
import Card from './Card';
// import shopData from '../FakeData/ShopData.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeFromCart } from '../../redux/actions/shopAction';

const Service = () => {
    const shopData = useSelector((state) => {
        return state.products.allProducts
    })
    const addProduct = useSelector((state) => {
        return state.products.addProduct
    })

    const dispatch = useDispatch()
    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Find Your Product</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        {
                             addProduct.map((data) => (
                                <div className="col-4 card">
                                    {/* <img style={{ height: 280 }} src={data.image} className="card-img-top" alt="" /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="d-flex justify-content-between ">
                                            <h5>BDT {data.price}</h5>
                                            <div onClick={() => dispatch(removeFromCart(data))} className="btn btn-primary">remove</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
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