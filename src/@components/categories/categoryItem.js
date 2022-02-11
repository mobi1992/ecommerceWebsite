import React from 'react'

const CategoryItem = ({category}) => {
    return (
        <>
        <div className = 'category-container'>
            <img className = 'catg-img' src={category.img} />
            <div className = 'catg-info-container'>
                <h3 style = {{color : 'white', marginBottom : '2vh', marginLeft : '1vw', fontSize : '3vw'}}>{category.title}</h3>
                <button style = {{border : 'none', color : 'grey', fontSize : 'bold', padding : '0.7vw', fontSize : '2vw'}}>SHOP NOW</button>
            </div>
        </div>
        </>
    )
}

export default CategoryItem
