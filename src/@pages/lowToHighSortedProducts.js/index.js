import React, { useState, useEffect } from 'react'
import Announcement from '../../@components/announcement'
import Footer from '../../@components/footer'
import NavBar from '../../@components/navBar'
import NewsLetter from '../../@components/newsLetter'
import { useNavigate } from "react-router-dom";
import ItemCard from '../../@components/itemCard'
import { commerce } from '../../lib/commerce'

const LowToHighSortedProducts = ({popularProducts, totalItems}) => {
    const navigate = useNavigate()
    // reload the previous page when backbutton is clicked
    window.onpopstate = function (event) {
        if (event) {
           // console.log('backbutton clicked')
            window.history.go()
            window.location.reload()
        }
    }
    // const [popularProducts, setPopularProducts] = useState([])
    // const fetchProducts = async () => {
    //     const { data } = await commerce.products.list()
    //     console.log(data)
    //     setPopularProducts(data)
    // }
    // lo to high sort
    const getValue = ({ price }) => +price.formatted_with_symbol.slice(1);
    popularProducts.sort((a, b) => getValue(a) - getValue(b));
    //console.log(popularProducts)

    const [val, setVal] = useState('')

    const HandleChange = (e) => {
        // set the default option in the localStorage, so that it can be set again on DOM reload
        localStorage.setItem('valuelowToHigh', 'low to high')
        setVal(e.target.value)
        if ((e.target.value) === 'no filter') {
            navigate('/products')
            window.location.reload()
        }
        else if ((e.target.value) === 'low to high') {
           // console.log('clicked low to high')
            const getValue = ({ price }) => +price.slice(1);
            popularProducts.sort((a, b) => getValue(a) - getValue(b));
            //console.log(popularProducts)
        }
        else {
           // console.log('clicked high to low')
            navigate('/products/high-to-low-prices')
        }
    }
    useEffect(() => {
        // on DOM reload set the default value
        setVal(localStorage.getItem('valuelowToHigh'))
       // fetchProducts()
    }, [])
    return (
        <>
            <Announcement />
            <NavBar totalItems={totalItems}/>
            <div style={{ marginLeft: '2vw' }}>Filter : <span>
                <select onChange={HandleChange} value={val}>
                    <option disabled selected>sort by price</option>
                    <option>no filter</option>
                    <option>low to high</option>
                    <option>high to low</option>
                </select>
            </span></div>
            <ItemCard popularProducts={popularProducts}/>
            <NewsLetter />
            <Footer />
        </>
    )
}

export default LowToHighSortedProducts
