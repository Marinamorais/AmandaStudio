// components/Carousel.js
import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const Carousel = () => {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="https://i.imgur.com/QAnHbVB.png"
          alt="slide 1"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="https://i.imgur.com/V2sKOIk.jpeg"
          alt="slide 2"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="https://i.imgur.com/RSwW5h3.jpeg"
          alt="slide 3"
        />
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
