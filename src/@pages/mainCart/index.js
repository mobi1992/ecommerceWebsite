import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid'
import { Link, useNavigate } from 'react-router-dom'
// import Cart from './Cart';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import MainCart from './MainCart';
import NewsLetter from '../../@components/newsLetter';
import Footer from '../../@components/footer';
import Announcement from '../../@components/announcement';
import NavBar from '../../@components/navBar';
const MainCartContainer = ({totalItems, msg, fetchCart, cart, handleUpdateCartQty, removeItemFromCart }) => {
    // const [msg, setMsg] = useState('The Following item has been added to your cart')
    // useEffect(() => {
    //     if (cart.line_items.length > 0) {
    //         setMsg('Item has been successfully added to your cart.')
    //     }
    //     else {
    //         setMsg('Your cart is empty now')
    //     }
    // }, [cart.line_items])

    // useEffect(() => {
    //     fetchCart()
    // }, [])
    const navigate = useNavigate()

    if (Object.keys(cart).length == 0) {
        return <div></div>
    }
    else {
        return (
            <>
                <Announcement />
                <NavBar totalItems={totalItems}/>
                <Container>
                    <Row>
                        <Col>
                            <Card className='border-0'>
                                <Card.Body onClick={e => {
                                    // do not close modal if anything inside modal content is clicked
                                    e.stopPropagation();
                                }} className='cart'>
                                    <p className='responsive-content-cart text-center'>{msg}
                                    </p>
                                    <div className='border-top'></div>
                                    <Row>
                                        <div className='mt-3 col-lg-8 col-md-8'>
                                            <h5 style={{ width: '100%', height: '35px', background: '#F2F3F3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>MY CART</h5>

                                            {cart.line_items.map(item => {
                                                return <MainCart key={item.id} item={item} handleUpdateCartQty={handleUpdateCartQty} removeItemFromCart={removeItemFromCart} />
                                            })}
                                        </div>

                                        <Col className='mt-3' lg='4' md='4'>
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
                                                <Button onClick={() => navigate('/products')} size='lg' className='cart-btn'>Continue Shopping</Button>
                                                <Button onClick={() => navigate('/checkout')} size='lg' className='cart-btn'>Checkout</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <NewsLetter />
                <Footer />
            </>
        )
    }

}

export default MainCartContainer;
