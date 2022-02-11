import React, {useState, useEffect} from 'react'
// import { popularProducts } from '../../data'
// For creating a fully developed webshop appliaction, you will need a full backend api, all the routes for fetching the products, creating the products, putting them, updating them, deleting them, selling them, you need authentification and a lot more things, all of this is tored in this little commerce instance. 
import Item from './item'

const ItemCard = ({popularProducts}) => {
    
    return (
        <div className = 'row justify-content-left'>
            {popularProducts.map(product => {
                return (
                    <Item product = {product} />
                )
            })}
        </div>
    )
}

export default ItemCard
