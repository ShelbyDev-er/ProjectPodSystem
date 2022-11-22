import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe',
    thumbnail: 'https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe',
  },
  {
    original: 'https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe',
    thumbnail: 'https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe',
  },
  {
    original: 'https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe',
    thumbnail: 'https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe',
  },
];

export default function ProductDetailSlider() {
  return (
    <>
        <ImageGallery 
        items={images} 
        showPlayButton={false}
        autoPlay={false}
        showFullscreenButton={false}
        slideInterval={30000}
        />
    </>
  )
}
