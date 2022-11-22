import React from 'react'
import { Carousel } from "react-configurable-carousel";

export default function TopSlider() {
  return (
    <div className='Carousel-container'>
        <Carousel
        arrows={false}
        dotsNavigation={false}
        dotsNavigationInside={true}
        width={"100%"}
        height={"400px"}
        carouselStyle={"3d"}
        autoScrollInterval={'3000'}
        outOfFocusDarken={true}
        >

            <img
            height="100%"
            src="https://user-images.githubusercontent.com/2279051/36819127-dc9e33ea-1c9c-11e8-9a93-0d3c0a674f02.png"
            style={{
                backgroundSize: 'cover',
                position: 'relative'
            }}
            width="100%"
            />   
            <img
            height="100%"
            src="https://user-images.githubusercontent.com/2279051/36819127-dc9e33ea-1c9c-11e8-9a93-0d3c0a674f02.png"
            style={{
                backgroundSize: 'cover',
                position: 'relative'
            }}
            width="100%"
            />    
            <img
            height="100%"
            src="https://user-images.githubusercontent.com/2279051/36819127-dc9e33ea-1c9c-11e8-9a93-0d3c0a674f02.png"
            style={{
                backgroundSize: 'cover',
                position: 'relative'
            }}
            width="100%"
            />    
        </Carousel>  
    </div>
  )
}
