import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'
import { display } from '@mui/system';
import { Row, Col, InputGroup, FormControl} from 'react-bootstrap';
const MainCart = ({ item, handleUpdateCartQty, removeItemFromCart }) => {
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
            <div className='main-cart-display-on-large-screens'>
                <Row class="main">
                    <Row className='mb-3 main align-items-center'>
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
                                <InputGroup className="mb-2">
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
            <div className='main-cart-display-on-small-screens'>
            <Row class="main border-bottom">
                    <Row className='mb-3 main align-items-center'>
                        <Col xs={7}>
                            <img key={item.id} class="img-fluid" src={item.image.url} />
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={3}>
                            <Row className='text-muted responsive-content-cart'>{item.name}</Row>
                        </Col>
                    </Row>
                    <Row className='main align-items-center'>
                    <Row>
                            <Col xs={2}>
                            <Row className='text-muted responsive-content-cart justify-content-left mt-2' style={priceStyle}>{item.price.formatted_with_symbol}</Row>
                            </Col>
                            <Col xs={8}>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text style={{ cursor: 'default' }} onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} id="basic-addon2">-</InputGroup.Text>
                                    <FormControl className='text-center' type="text"
                                        aria-label="text" aria-describedby="basic-addon2" onChange={handleChange} value={item.quantity}
                                    />
                                    <InputGroup.Text style={{ cursor: 'default' }} onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} id="basic-addon2">+</InputGroup.Text>
                                </InputGroup>
                            </Col>
                        <Col xs={2}>
                            <Row className='text-muted responsive-content-cart justify-content-right mt-2' style={priceStyle}>${price}.00</Row>
                        </Col>
                    </Row>
                        <Row className='justify-content-center'>
                            <Col>
                            <div onClick={() => removeItemFromCart(item.id)} className='text-center' style={{ textDecoration: 'underline', color: 'blue', cursor: 'default' }}>Remove</div>
                            </Col>
                        </Row>
                </Row>
                </Row>
            </div>
        </>
    )
};

export default MainCart;
