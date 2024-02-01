import React from 'react'


import addButton from "../../assets/images/Button.png";
import pricing from "../../assets/images/Price.png";


import bag from "../ShoesBags/Image.png";



function ShoesBags() {
  return (
    <div>

<div className="flex flex-row justify-between m-6">
      <div className="">
        <h2 className='text-lg font-bold'>Shoes & Bags</h2>
      </div>
      <div className="">
        <button className='text-green-600'>Sea All</button>
      </div>
    </div>

    <div className="flex flex-row overflow-x-auto">
        <div className="m-5 rounded-xl p-3 h-70 w-60  ">
          <div className="w-32 bg-white rounded-xl">
            <img
              className="w-32 h-32 object-contain"
              src={bag}
              alt="product"
            />
          </div>
          <div className="">
            <h1 className="text-lg font-bold mt-2">Black berry</h1>
          </div>
          <div className="">
            <p className="text-sm text-gray-600">approx 2lb</p>
          </div>
          <div className="flex flex-row justify-between  mt-2">
            <div className="">
             <img src={pricing} alt="price" />
            </div>
            <div className="">
              <img src={addButton} alt="addbutton" />
            </div>
          </div>
        </div>


        <div className="m-5 rounded-xl p-3 h-70 w-60  ">
          <div className="w-32 bg-white rounded-xl">
            <img
              className="w-32 h-32 object-contain"
              src={bag}
              alt="product"
            />
          </div>
          <div className="">
            <h1 className="text-lg font-bold mt-2">Black berry</h1>
          </div>
          <div className="">
            <p className="text-sm text-gray-600">approx 2lb</p>
          </div>
          <div className="flex flex-row justify-between  mt-2">
            <div className="">
            <img src={pricing} alt="price" />
            </div>
            <div className="">
            <img src={addButton} alt="addbutton" />
            </div>
          </div>
        </div>



        <div className="m-5 rounded-xl p-3 h-70 w-60  ">
          <div className="w-32 bg-white rounded-xl">
            <img
              className="w-32 h-32 object-contain"
              src={bag}
              alt="product"
            />
          </div>
          <div className="">
            <h1 className="text-lg font-bold mt-2">Black berry</h1>
          </div>
          <div className="">
            <p className="text-sm text-gray-600">approx 2lb</p>
          </div>
          <div className="flex flex-row justify-between  mt-2">
            <div className="">
            <img src={pricing} alt="price" />
            </div>
            <div className="">
            <img src={addButton} alt="addbutton" />
            </div>
          </div>
        </div>




        </div>
      
    </div>
  )
}

export default ShoesBags
