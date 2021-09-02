import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
    let products = [
        {
            id: 1,
            productName: "Product 1",
            price: 20,
            inCart: false
        },
        {
            id: 2,
            productName: "Product 2",
            price: 50,
            inCart: false
        },
        {
            id: 3,
            productName: "Product 3",
            price: 47,
            inCart: false
        },
        {
            id: 4,
            productName: "Product 4",
            price: 99,
            inCart: false
        },
        {
            id: 5,
            productName: "Product 5",
            price: 49,
            inCart: false
        },
        {
            id: 6,
            productName: "Product 6",
            price: 299,
            inCart: false
        },
        {
            id: 7,
            productName: "Product 7",
            price: 55,
            inCart: false
        },
        {
            id: 8,
            productName: "Product 8",
            price: 95,
            inCart: false
        },
    ]
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (id) => {
        let product = products.find(obj => obj.id === id)
        product.inCart = 'true'
        setCartItems([...cartItems, product])
        setTotal(product.price + total)
        console.log(product.inCart)
    }

    const removeItem = (id) => {
        let confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            let itemIndex = cartItems.findIndex(obj => obj.id === id)
            setTotal(total - cartItems[itemIndex].price)
            cartItems.splice(itemIndex, 1)
            setCartItems([...cartItems])
        }
    }
    return (
        <>
            <Navbar cartItems = {cartItems} total = {total} removeItem = {removeItem} />
            <Hero />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            products.map((product) => {
                                return <Card key = {product.id} data = {product} addToCart = {addToCart} cartItems = {cartItems} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
