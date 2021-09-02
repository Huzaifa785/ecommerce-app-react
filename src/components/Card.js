import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function Card(props) {
    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">

                            <h5 className="fw-bolder">{props.data.productName}</h5>

                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <ReactStars size={25} color='#ddd' isHalf = {true} />   
                            </div>
                           <span>Price: ${props.data.price}</span><br />
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><button onClick={() => props.addToCart(props.data.id)} className="btn btn-outline-dark mt-auto" disabled={props.cartItems.some((obj) => obj.id === props.data.id)}>Add to cart</button></div>
                    </div>
                </div>
            </div>
        </>
            )
}
