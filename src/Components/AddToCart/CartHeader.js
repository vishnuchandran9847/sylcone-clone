import React from "react";
import RightIcon from "../CartImages/Right Icon (1).png";
import LeftArrow from "../CartImages/Button (1).png";
import BadgeIcon from "../CartImages/Badge (1).png";
import cartimage from "../CartImages/Image (5).png";
import slidecontroler from "../CartImages/Slide Controller.png";
import star from "../CartImages/star-s-fill.png";
import arrowright from "../CartImages/arrow-right-s-line.png";

import likeicon from "../CartImages/Button (2).png";
import shareicon from "../CartImages/Button (3).png";
import addtocart from "../CartImages/Button (4).png";

import rectangle from "../CartImages/Rectangle (1).png";



function CartHeader() {
  return (
    <div>
    <div className="bg-light-green-100 " >
    <div className="flex flex-row justify-evenly pt-5 ">
       <div>
        <img src={LeftArrow} alt="lefticon" />
      </div>
      <div className="font-bold">
        Product Details
      </div>
      <div className="relative">
        <img src={RightIcon} alt="iconimage" />
        <img className="absolute right-0 top-0" src={BadgeIcon} alt="GreenBadge" />
      </div> 
      </div>


      <div className='relative'>
            <img  className='' src={cartimage} alt="iamgecart" />
            <img className='absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={slidecontroler} alt="controler" />
        </div>
    </div>


    <div className="mt-5 text-left px-8 font-bold text-2xl">
      Cabbage
    </div>
    <div className="flex flex-row justify-between items-center px-8 mt-4 mb-4">
      <div>
          lorem ipsum
      </div>
      <div className="font-bold">
        $ 3.49
      </div>
    </div>
    
    <div className="h-4  bg-gray-200"></div>

    <div className="flex justify-center items-center py-9">
      callorie value
    </div>
    <div className="h-4  bg-gray-200"></div>


    <div className="">
      <div className="px-3 py-3 font-bold">
      DESCRIPTION
      </div>
      <div className="px-3">
      How do you feel about the size of your team? Have you ever wished you had more people to plan, create, distribute, promote, and analyze content?
      </div>
    </div>

    <div className="h-4  bg-gray-200 mt-7"></div>

    <div className="">
      <div className="px-4 py-3 font-bold">
        REVIEW
      </div>
      <div className="flex flex-row items-center justify-center">
       <div className="flex space-x-1">
        <img src={star} alt="Ratings" />
        <img src={star} alt="Ratings" />
        <img src={star} alt="Ratings" />
        <img src={star} alt="Ratings" />
       </div>
      <div className="ml-2">
        5.0 from 496 Buyers
      </div>
      <div className="ml-2">
        <img src={arrowright} alt="arrowmark" />
       </div>
    </div>

    <div className="h-4 bg-gray-200 mt-7"></div>

    <div className="py-7 flex flex-row justify-center m-3 space-x-4">

      <div>
        <img src={likeicon} alt="addcart" />
      </div>
      <div>
        <img src={shareicon} alt="sharecart" />
      </div>
      <div>
        <img src={addtocart} alt="addtocart" />
      </div>
    </div>

    <div className="flex flex-row justify-center mb-4">
      <img src={rectangle} alt="rectangleimage" />
    </div>


    </div>
    




    </div>
  );
}

export default CartHeader;
