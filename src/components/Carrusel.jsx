import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <div>
      <Carousel data-bs-theme='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.mineducacion.gov.co/1759/articles-409374_recurso_1.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.adsttc.com/media/images/61dc/9793/23d7/e841/555d/d842/medium_jpg/colegio-laurel-de-cera-web-llanofotografia-6637.jpg?1641846691'
            alt='Second slide'
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.portafolio.co/files/article_multimedia/uploads/2018/05/16/5afc918cd9d0b.jpeg'
            alt='Third slide'
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
