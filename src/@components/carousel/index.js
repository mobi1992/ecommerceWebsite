import React from 'react'
import { Carousel, Image, Button } from 'react-bootstrap'
import { sliderItems } from '../../data'
import './index.css'
const CarouselSlider = () => {
    const prevIcon = () => {
        return (
            <span>
                <i style={{ color: 'white', fontSize: 'bold', opacity : '1'}} className="fas fa-chevron-circle-left glyphicon"></i>
            </span>
        )
    }
    const nextIcon = () => {
        return (
            <span>
                <i style={{ color: 'white', fontSize: 'bold', opacity : '1'}} className="fas fa-chevron-circle-right glyphicon"></i>
            </span>
        )
    }
    return (
        <Carousel indicators = {false} nextIcon={nextIcon()} prevIcon={prevIcon()}>
            {sliderItems.map(item => {
                return (
                    <Carousel.Item>
                    <div style = {{backgroundColor : `${item.bg}`}} className='carousel-class'>
                        <div className = 'image-wrapper'>
                            <Image className='home-img' src={item.img} />
                        </div>
                        <div className = 'crs-display-on-very-large-screens'>
                        <div className = 'info-container'>
                            <h2 className = 'res-content' style = {{fontWeight : 'bold'}}>{item.title}</h2>
                            <p className = 'res-content res-content-p'>{item.desc} GET FLAT 30% OFF ON NEW ARRIVALS.</p>
                            <Button className = 'res-content' variant = 'dark'>SHOP NOW</Button>
                        </div>
                        </div>
                        <div className = 'crs-display-on-large-screens'>
                        <div className = 'info-container'>
                            <h2 className = 'res-content' style = {{fontWeight : 'bold'}}>{item.title}</h2>
                            <p className = 'res-content' style = {{paddingTop : '1vh'}}>{item.desc}</p>
                            <p className = 'res-content' style = {{paddingBottom : '1vh'}}>GET FLAT 30% OFF ON NEW ARRIVALS.</p>
                            <Button className = 'res-content' variant = 'dark'>SHOP NOW</Button>
                        </div>
                        </div>
                        <div className = 'crs-display-on-small-screens'>
                        <div className = 'info-container'>
                            <h2 className = 'res-content' style = {{fontWeight : 'bold'}}>{item.title}</h2>
                            <p className = 'res-content res-content-p'>FLAT 30% OFF ON NEW ARRIVALS.</p>
                            <Button className = 'res-content' variant = 'dark'>SHOP NOW</Button>
                        </div>
                        </div>
                        <div className = 'crs-display-on-very-small-screens'>
                        <div className = 'info-container'>
                            <h2 className = 'res-content' style = {{fontWeight : 'bold'}}>{item.title} FLAT 30% OFF</h2>
                            <Button className = 'res-content' variant = 'dark'>SHOP NOW</Button>
                        </div>
                        </div>
                    </div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default CarouselSlider
