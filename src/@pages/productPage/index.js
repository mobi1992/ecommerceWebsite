import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import './index.css'
import { commerce } from '../../lib/commerce'
import Announcement from '../../@components/announcement'
import NavBar from '../../@components/navBar'
import NewsLetter from '../../@components/newsLetter'
import Footer from '../../@components/footer'
import { Typography } from '@material-ui/core'
import { InputGroup, FormControl } from 'react-bootstrap'
import CartContainer from '../../@components/cart'
const ProductPage = ({ totalItems, fetchProducts, popularProducts, handleAddToCart, cart, handleUpdateCartQty, removeItemFromCart }) => {
    // const [popularProducts, setPopularProducts] = useState([])
    // const fetchProducts = async () => {
    //     const { data } = await commerce.products.list()
    //     console.log(data)
    //     setPopularProducts(data)
    // }
    window.addEventListener('load', (event) => {
        //console.log('page is fully loaded');

    });
    // useEffect(() => {
    //     fetchProducts()
    // }, [])
    const [cartCon, showCartCon] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => {
        if (quantity !== '') {
            setQuantity(prevQty => prevQty + 1)
        }
    }

    const decrementQuantity = () => {
        if (quantity >= 2) {
            setQuantity(prevQty => prevQty - 1)
        }
    }

    const handleChange = (e) => {
        setQuantity(parseInt(e.target.value))
        //console.log(quantity)
       // console.log('input handle change')

        if (isNaN(parseInt(e.target.value))) {
            setQuantity('')
        }
        else {

        }
    }


    useEffect(() => {
       // console.log('useEffect called')
    }, [])
    const priceStyle = {
        color: '#5b18b0',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    }

    const match = useParams()
   // console.log(match)
    const matchId = String(match.id)
   // console.log(match.id)
   // console.log(matchId)
   // console.log(popularProducts)
    const matchProduct = popularProducts.filter(item => matchId === item.id)
   // console.log(matchProduct)
    const addToCart = () => {
        if (quantity === '') {
            handleAddToCart(matchProduct[0].id, 1)
        }
        else {
            handleAddToCart(matchProduct[0].id, quantity)
        }
    }
    if (popularProducts.length !== 0) {
        return (
            <>
                <Announcement />
                <NavBar totalItems={totalItems}/>
                <Container>
                    <Row className='justify-content-left'>
                        <Col lg='6' md='6' sm='12' xs='12'>
                            <Card className='border-0 mt-5'>
                                <Card.Body>
                                    <img key={matchProduct[0].id} className="card-img img-responsive" src={matchProduct[0].image.url} alt="Card image" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='6' md='6' sm='12' xs='12'>
                            <Card className='border-0 mt-5'>
                                <Card.Body>
                                    <h2 className='mt-3 card-title responsive-content-heading'>{matchProduct[0].name} </h2>
                                    <h3 className='card-title responsive-content-heading' style={priceStyle}>{matchProduct[0].price.formatted_with_symbol}</h3>
                                    <div className='mt-3 mb-3'>
                                        <p style={{ display: 'inline' }}>Availability : </p>
                                        <p style={{ color: 'green', display: 'inline', fontWeight: 'bold' }}>In Stock</p>
                                    </div>
                                    <div className='mb-3'>
                                        <p style={{ display: 'inline' }}>Product Code : </p>
                                        <p style={{ color: 'grey', display: 'inline', fontWeight: 'bold' }}>{matchProduct[0].id}</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h2 className='responsive-content-heading'>Description:</h2>
                                        <Typography dangerouslySetInnerHTML={{ __html: matchProduct[0].description }} variant='p' />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Row style={{ marginLeft: '0.5vw' }} className='main'>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text style={{ cursor: 'default' }} onClick={decrementQuantity} id="basic-addon2">-</InputGroup.Text>
                                        <FormControl className='text-center' type="text"
                                            aria-label="text" aria-describedby="basic-addon2" onChange={handleChange} value={quantity}
                                        />
                                        <InputGroup.Text style={{ cursor: 'default' }} onClick={incrementQuantity} id="basic-addon2">+</InputGroup.Text>
                                    </InputGroup>
                                </Col>
                                <Col style={{ display: 'inline' }}>
                                    <Link to={`/${match.id}`}>
                                        <div onClick={() => showCartCon(true)}>
                                            <Button onClick={addToCart} variant='dark' id={matchProduct[0].id} className='btn responsive-content-item btn-item'>Add To Cart</Button>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {
                    cartCon ?
                        //  <qtyContext.Provider value = {{quantity : quantity, setQuantity : setQuantity}}>
                        <CartContainer onCloseCart={() => showCartCon(false)} cart={cart} handleUpdateCartQty={handleUpdateCartQty} removeItemFromCart={removeItemFromCart} />
                        //  </qtyContext.Provider>
                        : ''
                }
                <NewsLetter />
                <Footer />
            </>
        )
    }
    else {
        return <div>

        </div>
    }
}

export default ProductPage
