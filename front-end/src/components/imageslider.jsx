import React, { useState, useEffect } from 'react';

const CarouselIndicators = ({ images, activeIndex, onClick }) => {
  return (
    <div className="carousel__indicators">
      {images.map((_, index) => (
        <span
          key={index}
          className={`carousel__indicator ${
            index === activeIndex ? 'active' : ''
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

const Carousel = ({ images, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timer;
    const transition = () => {
      setActiveIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    timer = setTimeout(transition, interval);

    return () => clearTimeout(timer);
  }, [activeIndex, images.length, interval]);

  const goToSlide = index => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__image-container">
        <div
          className="carousel__inner-container"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="carousel__img"
            />
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        onClick={goToSlide}
      />
    </div>
  );
};

export default Carousel;