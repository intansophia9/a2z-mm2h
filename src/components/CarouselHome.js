import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
//wont be able to overwrite Bootstrap css with CSS module
import "./Carousell.scss";

// Slides
import city from "../images/towers.jpg";
import beach from "../images/beach.jpg";
import mosque from "../images/mosque.jpg";

const items = [
  {
    src: city,
    altText: "Slide1",
    className: "img",
  },
  {
    src: beach,
    altText: "Slide2",
    className: "img",
  },
  {
    src: mosque,
    altText: "Slide3",
    className: "img",
  },
];
const CarouselHome = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="slide-items"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img" />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      interval={3000}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselHome;
