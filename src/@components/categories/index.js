import React from 'react'
import { categories } from '../../data'
import './index.css'
import CategoryItem from './categoryItem'
import CategoryItemSmall from './categoryItemSmall'
const Categories = () => {
    return (
        <>
        <div className='catg-display-on-large-screens'>
        <div className='categories-container'>
            {categories.map(category => {
                return (
                <CategoryItem category={category} />
                )
            })}
        </div>
        </div>
        <div className='catg-display-on-small-screens'>
        <div className='categories-container-small-screens'>
            {categories.map(category => {
                return (
                <CategoryItemSmall category={category} />
                )
            })}
        </div>
        </div>
        </>
    )
}

export default Categories
