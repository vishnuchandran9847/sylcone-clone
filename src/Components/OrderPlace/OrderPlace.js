import React from 'react';
import lotify from "../../lotties/lotify.json"
import Lottie from "lottie-react";

import images from "../../assets/images/PHOTO-2023-07-17-11-59-02copy 1 (1).png"

function OrderPlace() {
  
  return (
    <div>
    <div className='flex flex-col items-center justify-center text-center space-y-9'>

  <div className='lotify-container'>
    <Lottie animationData={lotify} loop={true}/>
  </div>

  <div className='place-text'>Your Order has been placed</div>

  <div className="place-content">Your items have been placed and are on their way to being processed</div>

  <div className='place-content1'>Please share with your family and friends.</div>

  <div className="store-content">
    <button className="border border-green-500 rounded-md px-4 text-green-900 font-bold text-lg">Share</button>
  </div>

  <div className='flex items-center justify-center'>
    <img className='logo-img' src={images} alt="logo" />
  </div>
  </div>

  <div className="relative ml-8 mr-8 mt-10 rounded-xl border border-green-900 bg-green-800 h-12 w-90 ">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
      View Order
    </div>
  </div>

</div>

  )
}

export default OrderPlace;