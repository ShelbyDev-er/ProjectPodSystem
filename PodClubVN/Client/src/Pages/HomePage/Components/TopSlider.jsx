import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'https://cdn.shopify.com/s/files/1/0418/8599/1071/files/vativ-sec3-img.webp?v=1664615426&width=1500',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0418/8599/1071/files/vativ-sec3-img.webp?v=1664615426&width=1500',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/0418/8599/1071/files/vativ-sec3-img.webp?v=1664615426&width=1500',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0418/8599/1071/files/vativ-sec3-img.webp?v=1664615426&width=1500',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/0418/8599/1071/files/vativ-sec3-img.webp?v=1664615426&width=1500',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0418/8599/1071/files/vativ-sec3-img.webp?v=1664615426&width=1500',
  },
];

export default function ProductDetailSlider() {
  return (
    <>
        <ImageGallery 
        items={images} 
        showPlayButton={false}
        autoPlay={true}
        showThumbnails={false}
        showBullets={true}
        showFullscreenButton={false}
        slideInterval={3000}
        />
    </>
  )
}
