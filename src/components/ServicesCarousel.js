import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
//wont be able to overwrite Bootstrap css with CSS module
import "./Carousell.scss";

// Slides

import business from "../images/business.jpg";
import edu from "../images/edu.jpg";
import condo from "../images/property.jpg";
import tax from "../images/tax.jpg";
import family from "../images/family.jpg";
import domestic from "../images/help.jpg";
import { HashLink } from "react-router-hash-link";

const items = [
  {
    src: condo,
    altText: "Slide1",
    header: "Purchase Property",
    caption: (
      <HashLink to="/services#property">
        <button type="button">Learn more</button>
      </HashLink>
    ),
    className: "img",
  },

  {
    src: domestic,
    altText: "Slide3",
    header: "Domestic Help",
    caption: (
      <HashLink to="/services#domestic">
        <button type="button">Learn more</button>
      </HashLink>
    ),
    className: "img",
  },
  {
    src: edu,
    altText: "Slide4",

    header: "Education",
    caption: (
      <HashLink to="/services#education">
        <button type="button">Learn more</button>
      </HashLink>
    ),
    className: "img",
  },
  {
    src: tax,
    altText: "Tax",
    header: "Tax",
    caption: (
      <HashLink to="/services#tax">
        <button type="button">Learn more</button>
      </HashLink>
    ),
    className: "img",
  },
  {
    src: family,
    altText: "Family needs",
    header: "Family needs",
    caption: (
      <HashLink to="/services#family">
        <button type="button">Learn more</button>
      </HashLink>
    ),
    className: "img",
  },
  {
    src: business,
    altText: "Business needs",
    header: "Business needs",
    caption: (
      <HashLink to="/services#business">
        <button type="button">Learn more</button>
      </HashLink>
    ),
    className: "img",
  },
];
const ServicesCarousel = (props) => {
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
        <CarouselCaption
          className="text"
          captionHeader={item.header}
          captionText={item.caption}
        />
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

export default ServicesCarousel;
