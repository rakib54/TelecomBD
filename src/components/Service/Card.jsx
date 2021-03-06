import React from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../redux/actions/shopAction';


const Card = ({ data }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="col-10 col-md-4 mx-auto">
                <div className="card">
                    <img style={{height:280}} src={data.image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex justify-content-between ">
                            <h5>BDT {data.price}</h5>
                            <div onClick={() => dispatch(AddToCart(data))}  className="btn btn-primary">Add to cart</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Card;