import React from 'react'

const CategoryItemSmall = ({category}) => {
    return (
        <>
        <div className = 'category-container-small-screens'>
            <img className = 'catg-img' src={category.img} />
            <div className = 'catg-info-container'>
                <h3 style = {{color : 'white', marginBottom : '2vh', marginLeft : '1vw', fontSize : '6vw'}}>{category.title}</h3>
                <button style = {{border : 'none', color : 'grey', fontSize : 'bold', padding : '1.5vw', fontSize : '4vw'}}>SHOP NOW</button>
            </div>
        </div>
        </>
    )
}

export default CategoryItemSmall
