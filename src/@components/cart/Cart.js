import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'
import { Row, Col, InputGroup, FormControl} from 'react-bootstrap';
const Cart = ({ item, handleUpdateCartQty, removeItemFromCart }) => {
    const priceStyle = {
        color: '#5b18b0',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    }
    const price = item.quantity * (parseFloat(item.price.formatted))

    const handleChange = (e) => {
        handleUpdateCartQty(item.id, parseInt(e.target.value))
        if (isNaN(parseInt(e.target.value))) {
            handleUpdateCartQty(item.id, 1)
        }
        if (e.target.velue === '') {
            handleUpdateCartQty(item.id, 1)
        }
    }
    return (
        <>
            <div className='cart-display-on-large-screens'>
                <Row class="border-bottom">
                    <Row className='main align-items-center'>
                        <Col xs={3}>
                            <img key={item.id} class="img-fluid" src={item.image.url} />
                        </Col>
                        <Col xs={7}>
                            <Row className='text-muted responsive-content-cart'>{item.name}</Row>
                        </Col>
                        <Col>
                            <Row style={{ cursor: 'default' }}>
                                <div style={{
                                    position: 'relative',
                                    top: '0px',
                                    botton: '0px',
                                    left: '2vh'
                                }}
                                    id={item.id} onClick={() => removeItemFromCart(item.id)}>X</div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='main align-items-center'>
                        <Col>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text style={{ cursor: 'default' }} onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} id="basic-addon2">-</InputGroup.Text>
                                    <FormControl className='text-center' type="text"
                                        aria-label="text" aria-describedby="basic-addon2" onChange={handleChange} value={item.quantity}
                                    />
                                    <InputGroup.Text style={{ cursor: 'default' }} onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} id="basic-addon2">+</InputGroup.Text>
                                </InputGroup>
                                <div onClick={() => removeItemFromCart(item.id)} className='text-center' style={{ textDecoration: 'underline', color: 'blue', cursor: 'default' }}>Remove</div>
                            </Row>
                        </Col>
                        <Col>
                            <Row className='text-center responsive-content-cart justify-content-center' style={priceStyle}>Price</Row>
                            <Row className='text-muted responsive-content-cart justify-content-center' style={priceStyle}>{item.quantity} X {item.price.formatted}</Row>
                            <Row className='text-muted responsive-content-cart justify-content-center' style={priceStyle}>=${price}.00</Row>
                        </Col>
                    </Row>
                </Row>
            </div>
            <div className='cart-display-on-small-screens'>
                <div style={{ width: '150vw', display: 'flex' }} class="border-bottom">
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                        <div className='col-4'>
                            <img key={item.id} class="img-fluid" src={item.image.url} />
                        </div>
                        <div className='col-2'>

                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='row text-muted responsive-content-cart mb-2'>{item.name}</div>
                                <div className='row text-center' style={{ textDecoration: 'underline', color: 'blue', cursor: 'default' }} onClick={() => removeItemFromCart(item.id)}>Remove</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                        <div className='col-6'>
                            <div class="input-group mb-1">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary responsive-content-item btn-inc-dec" type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                                </div>
                                <input type='text' class="text-center form-control" value={item.quantity} onChange={handleChange} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary responsive-content-item btn-inc-dec" type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row text-center responsive-content-cart justify-content-center' style={priceStyle}>Price</div>
                            <div className='row text-muted responsive-content-cart justify-content-center' style={priceStyle}>{item.quantity} X {item.price.formatted}</div>
                            <div className='row text-muted responsive-content-cart justify-content-center' style={priceStyle}>=${price}.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Cart;
