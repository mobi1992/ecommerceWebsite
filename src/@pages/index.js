import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom'
import HighToLowSortedProducts from './highToLowSortedProducts'
import Home from './homePage'
import LowToHighSortedProducts from './lowToHighSortedProducts.js'
import ProductPage from './productPage'
import Shop from './shop'
import { commerce } from '../lib/commerce'
import MainCartContainer from './mainCart'
import NavBar from '../@components/navBar'
import Announcement from '../@components/announcement'
import Checkout from './checkout'

const MainApp = () => {
    const [cart, setCart] = useState({})
    const [popularProducts, setPopularProducts] = useState([])
    const [msg, setMsg] = useState('')
    const [order, setOrder] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        //console.log(data)
        setPopularProducts(data)
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve()
       // console.log(cart)
        setCart(cart)
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)
        setCart(item.cart)
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        // we will put quantity in curly braces because we only want to change the quantity
        const item = await commerce.cart.update(productId, { quantity })
        setCart(item.cart)
    }

    const removeItemFromCart = async (productId) => {
        const item = await commerce.cart.remove(productId)
        setCart(item.cart)
        //console.log(cart.line_items.length)
        if (cart.line_items.length === 1) {
            setMsg('Your Cart is empty now')
        }
        else {
            setMsg('')
        }
    }

    const handleCaptureOrder = async (checkTokenId, newOrder) => {
        try{
            const incomingOrder = await commerce.checkout.capture(checkTokenId, newOrder)
            setOrder(incomingOrder)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        fetchProducts()
        fetchCart()
        //console.log(cart)
        //console.log(popularProducts)
    }, [])
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home totalItems={cart.total_items}/>} />
                    <Route exact path='/products' element={<Shop popularProducts={popularProducts} totalItems={cart.total_items}/>} />
                    <Route exact path='/products/low-to-high-prices' element={<LowToHighSortedProducts popularProducts={popularProducts} totalItems={cart.total_items}/>} />
                    <Route exact path='/products/high-to-low-prices' element={<HighToLowSortedProducts popularProducts={popularProducts} totalItems={cart.total_items}/>} />
                    <Route exact path='/:id' exact element={<ProductPage fetchProducts={fetchProducts} popularProducts={popularProducts} handleAddToCart={handleAddToCart} cart={cart} handleUpdateCartQty={handleUpdateCartQty} removeItemFromCart={removeItemFromCart} totalItems={cart.total_items}/>} />
                    <Route exact path='/cart' exact element={<MainCartContainer msg={msg} fetchCart={fetchCart} totalItems={cart.total_items} fetchProducts={fetchProducts} popularProducts={popularProducts} handleAddToCart={handleAddToCart} cart={cart} handleUpdateCartQty={handleUpdateCartQty} removeItemFromCart={removeItemFromCart} />} />
                    <Route exact path='/checkout' exact element={<Checkout cart = {cart} order = {order} handleCaptureOrder = {handleCaptureOrder}/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default MainApp
