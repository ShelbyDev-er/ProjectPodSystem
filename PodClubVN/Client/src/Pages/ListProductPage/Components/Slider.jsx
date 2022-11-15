import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://saigonretrovape.vn/wp-content/uploads/2022/05/nen-mua-pod-system-nao.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://saigonretrovape.vn/wp-content/uploads/2022/05/nen-mua-pod-system-nao.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://saigonretrovape.vn/wp-content/uploads/2022/05/nen-mua-pod-system-nao.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://saigonretrovape.vn/wp-content/uploads/2022/05/nen-mua-pod-system-nao.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://saigonretrovape.vn/wp-content/uploads/2022/05/nen-mua-pod-system-nao.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://saigonretrovape.vn/wp-content/uploads/2022/05/nen-mua-pod-system-nao.jpg" onDragStart={handleDragStart} role="presentation" />,
];

const responsive = {
    1200: {
      items: 3,
    },
    800: {
      items: 2,
    },
    0: {
      items: 1,
    },
  };

export default function ListProductSlider() {
  return (
    <AliceCarousel 
    responsive={responsive}
    mouseTracking 
    items={items} 
    animationDuration={2000}
    autoPlay={true}
    infinite={true}
    autoWidth={true}
    autoHeight={true}
    disableDotsControls
    disableButtonsControls
    />
  );
}