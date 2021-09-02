import React from 'react'

export default function CartModal(props) {
    return (
        <>
            <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{props.cartItems.length}</span>
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                props.cartItems.length > 0 ? <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.cartItems.map((cartItem, index) => {
                                            return <tr key = {index}>
                                            <td>{cartItem.productName}</td>
                                            <td>${cartItem.price}</td>
                                            <td><button onClick={() => props.removeItem(cartItem.id)} className="btn btn-danger btn-sm">Remove</button></td>
                                        </tr>
                                        })
                                    }
                                </tbody>
                            </table> : <h5>Your cart is emtpy...</h5>
                            }
                            {props.total === 0 ? '' : <h3>Total: ${props.total}</h3>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
