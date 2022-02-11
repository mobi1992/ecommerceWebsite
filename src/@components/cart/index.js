import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid'
import { Link, useNavigate } from 'react-router-dom'
import Cart from './Cart';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './index.css'
const CartContainer = ({ onCloseCart, cart, handleUpdateCartQty, removeItemFromCart }) => {
    const [msg, setMsg] = useState('The Following item has been added to your cart')
    useEffect(() => {
        if (cart.line_items.length > 0) {
            setMsg('Item has been successfully added to your cart.')
        }
        else {
            setMsg('Your cart is empty now')
        }
    }, [cart.line_items])
    const navigate = useNavigate()
    const listItems = cart.line_items.map(item => {
        return <Cart key={item.id} item={item} handleUpdateCartQty={handleUpdateCartQty} removeItemFromCart={removeItemFromCart}></Cart>
    })
   // console.log(cart.line_items)
   console.log(cart)
    return (
        <Row className='justify-content-center align-items-center' style={{
            position: 'fixed',
            top: '0px',
            bottom: '0px',
            left: '0px',
            right: '0px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }} onClick={onCloseCart}>
            <Col lg='10' md='11' sm='11' xs='11'
                style={{
                    position: 'relative',
                    overflowY: 'scroll'
                }}>
                <Card>
                    <Card.Body onClick={e => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }} className='cart'>
                        <p className='mt-2 responsive-content-cart text-center'>{msg}
                            <span><FontAwesomeIcon onClick={onCloseCart} style={{
                                position: 'absolute',
                                top: '0px',
                                bottom: '0px',
                                right: '0px'
                            }} icon={faTimesCircle} /></span>
                        </p>
                        <div className='cart-display-on-small-screens'>
                            <h5 style={{ width: '100%', height: '35px', background: '#F2F3F3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>YOUR ORDER</h5>
                        </div>
                        <div className='mb-3'></div>
                        <Row>
                            <div style={{
                                overflowY: 'scroll',
                                height: '50vh'
                            }} className='col-lg-8 col-md-7'>
                                <div className='cart-display-on-large-screens'>
                                    <h5 style={{ width: '100%', height: '35px', background: '#F2F3F3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>YOUR ORDER</h5>
                                </div>
                                {listItems}
                            </div>

                            <Col lg='4' md='5'>
                                <h5 style={{ width: '100%', height: '35px', background: '#F2F3F3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>QUICK CART</h5>

                                <Row>
                                    <Col>
                                        <p className='responsive-content-cart-button'>Total: </p>
                                    </Col>
                                    <Col>
                                        <p className='text-end responsive-content-cart-button'> {cart.subtotal.formatted_with_symbol}</p>
                                    </Col>
                                </Row>
                                <div className='mb-2 d-grid gap-2'>
                                    <Button onClick={() => navigate('/cart')} size='lg' className='cart-btn'>View The Cart</Button>
                                    <Button onClick={() => navigate('/products')} size='lg' className='cart-btn'>Continue Shopping</Button>
                                    <Button onClick={() => navigate('/checkout')} size='lg' className='cart-btn'>Checkout</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default CartContainer;
