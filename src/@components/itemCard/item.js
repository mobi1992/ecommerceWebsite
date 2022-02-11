import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import './index.css'
import { useNavigate, Link } from "react-router-dom";

const Item = ({ product }) => {
    const navigate = useNavigate()
    console.log(product)
    return (
        <Col lg='3' md='4' sm='6' xs='6'>
            <Card className='border-0 mt-2 card-product'>
                    <div className='card-image-con'>
                        <div className='product-image-wrapper'>
                        <Image src={product.image.url} className='card-img img-responsive square-img' />
                        </div>
                        <div className='display-on-small-screens'>
                            <div className='product-info-container'>
                            <Link to = {`/${product.id}`}>
                                <div className='icon'>
                                    <ShoppingCartOutlined fontSize='small' />
                                </div>
                            </Link>
                                <div className='icon'>
                                    <FavoriteBorderOutlined fontSize='small' />
                                </div>
                                <div className='icon'>
                                    <SearchOutlined fontSize='small' />
                                </div>
                            </div>
                        </div>
                        <div className='display-on-medium-screens'>
                            <div className='product-info-container'>
                            <Link to = {`/${product.id}`}>
                                <div className='icon'>
                                    <ShoppingCartOutlined />
                                </div>
                            </Link>
                                <div className='icon'>
                                    <FavoriteBorderOutlined />
                                </div>
                                <div className='icon'>
                                    <SearchOutlined />
                                </div>
                            </div>
                        </div>
                        <div className='display-on-large-screens'>
                            <div className='product-info-container'>
                                <Link to = {`/${product.id}`}>
                                <div className='icon'>
                                    <ShoppingCartOutlined fontSize='large'/>
                                </div>
                                </Link>
                                <div className='icon'>
                                    <FavoriteBorderOutlined fontSize='large' />
                                </div>
                                <div className='icon'>
                                    <SearchOutlined fontSize='large' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 className='text-center'>{product.name}</h6>
                    <h6 className='text-center text-muted'>{product.price.formatted_with_symbol}</h6>
            </Card>
        </Col>
    )
}

export default Item
