import React, { useEffect } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { Banners } from "../../ReduxAPI/Slice/BannerSlice";



function SecondBanner() {
  const dispatch = useDispatch();
  const BannerImg = useSelector((state)=>state.Banner.Banners)
  
  
  useEffect(() => {
  
      dispatch(Banners())
  
  }, [dispatch])
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  

  return (
    <Slider {...settings}>

    {BannerImg && BannerImg.map((bannerimg,id)=>(
        <div key={id} className="card  p-3">
        <img className="w-full h-full" src={`https://sylcon.howincloud.com/public/${bannerimg.image2}`} alt="productbanner" />
        </div>
    ))}

     
    </Slider>
  );
}

export default SecondBanner;
