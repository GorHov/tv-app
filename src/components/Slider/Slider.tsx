import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss";
import type { VideoType } from "../../types/VideoType";
import { setFeatured } from "../../features/videos/videoSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

type SliderProps = {
  items: VideoType[];
  setPlayVideo: (val: boolean) => void;
};

const Slider: React.FC<SliderProps> = ({ items , setPlayVideo}) => {
  const dispatch = useAppDispatch();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
    },
  };

  const handleClick = (item: VideoType) => {
    dispatch(setFeatured(item));
    setPlayVideo(false)
  };

  return (
    <div className="my-carousel-wrapper">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        arrows
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {items?.map((item, idx) => (
          <img
            src={`assets/${item.CoverImage}`}
            alt={item.Title}
            key={idx}
            className="carousel-card"
            onClick={() => handleClick(item)}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
