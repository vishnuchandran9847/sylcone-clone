import React, { useEffect } from "react";
import "./Banner.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { Banners } from "../../ReduxAPI/Slice/BannerSlice";

function Banner() {
  const dispatch = useDispatch();
  const BannerImg = useSelector((state) => state.Banner.Banners);

  useEffect(() => {
    dispatch(Banners());
  }, [dispatch]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return (
    <div className="px-4 py-3">
      <Slider {...settings}>
        {BannerImg &&
          BannerImg.map((banner, id) => (
            <img
              key={id}
              className="banner-logo"
              src={`https://sylcon.howincloud.com/public/${banner.image}`}
              alt={`banner-${id}`}
            />
          ))}
      </Slider>
    </div>
  );
}

export default Banner;
