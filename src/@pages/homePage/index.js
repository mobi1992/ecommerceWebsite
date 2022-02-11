import React, {useState, useEffect} from 'react'
import Announcement from '../../@components/announcement'
import CarouselSlider from '../../@components/carousel'
import Categories from '../../@components/categories'
import Footer from '../../@components/footer'
import ItemCard from '../../@components/itemCard'
import NavBar from '../../@components/navBar'
import NewsLetter from '../../@components/newsLetter'
import {commerce} from '../../lib/commerce'

const Home = ({totalItems}) => {
    const [popularProducts, setPopularProducts] = useState([])
    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        console.log(data)
        setPopularProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <>
        <Announcement />
        <NavBar totalItems={totalItems}/>
        <CarouselSlider />
        <Categories />
        <ItemCard popularProducts={popularProducts}/>
        <NewsLetter />
        <Footer />
        </>
    )
}

export default Home
