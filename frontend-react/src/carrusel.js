import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img src='imagenes/valorant.jpg'/>
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src='imagenes/musica.jpg'/>
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src='imagenes/desarrollo.png'/>
            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
  );
}

export default ControlledCarousel;