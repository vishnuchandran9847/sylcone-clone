import React from 'react'
import navicon from "../../assets/images/Group (1).png";

import mandarin from "../../assets/images/Image (7).png";
import inputnum from "../../assets/images/Input.png";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import badge from "../../assets/images/Badge.png";
import badge1 from "../CartImages/Badge (2).png";
import { MdOutlineEdit } from "react-icons/md";




function CheckOut() {
  return (
    <div>
        <div className='flex flex-row items-center mt-8'>
          <div className='ml-5'>
            <img className='left-arrow' src={navicon} alt="" />
          </div>
          <div className='check-text mx-auto'>Checkout</div>
        </div>


        <div className='py-9 flex flex-row justify-between'>
            <div className='Address-text ml-5'>Delivery Address</div>
            <div className='change-text mr-5'>Change</div>
        </div>

        <div className='text-box mb-14'>
          <div className='flex flex-row'>
          <div className='name-text'>John Doe</div>
          <div className='dot-text'>•</div>
          <div className='add-text'>714 430 2816</div>
          </div>
          <div>
            <div className='content-text'>854 Liberty Avenue <br /> Kochi, KL 693546</div>
          </div>
        </div>

        <div className="h-3  bg-gray-200 mt-5"></div>

        <div>
            <div className='section-header ml-5 mt-9'>Order Detail</div>

            <div className="flex flex-row items-center justify-between px-5 py-5">
              <div>
                <img src={mandarin} alt="imagecabbage" />
              </div>
              <div className="ml-4">
                <div>Cabbage</div>
                <div>Approx lb</div>
              </div>
              <div className="ml-auto">$3.99</div>
            </div>
              <div className="flex flex-row items-center px-5">
                <div className="mr-auto">Total: $3.99</div>
                <div className="flex items-center"><FaMinus style={{ height: '20px' }} /></div>
                <div className="flex items-center"><img src={inputnum} alt="numimage" style={{ height: '20px' }} /></div>
                <div className="flex items-center"><IoMdAdd style={{ height: '20px' }} /></div>
            </div>
    
            <div className="h-1  bg-gray-200 mt-5"></div>

            <div className="flex flex-row items-center justify-between px-5 py-5">
              <div>
                <img src={mandarin} alt="imagecabbage" />
              </div>
              <div className="ml-4">
                <div>Cabbage</div>
                <div>Approx lb</div>
              </div>
              <div className="ml-auto">$3.99</div>
            </div>
              <div className="flex flex-row items-center px-5">
                <div className="mr-auto">Total: $3.99</div>
                <div className="flex items-center"><FaMinus style={{ height: '20px' }} /></div>
                <div className="flex items-center"><img src={inputnum} alt="numimage" style={{ height: '20px' }} /></div>
                <div className="flex items-center"><IoMdAdd style={{ height: '20px' }} /></div>
            </div>

            <div className="h-1  bg-gray-200 mt-5"></div>

            <div className="flex flex-row items-center justify-between px-5 py-5">
              <div>
                <img src={mandarin} alt="imagecabbage" />
              </div>
              <div className="ml-4">
                <div>Cabbage</div>
                <div>Approx lb</div>
              </div>
              <div className="ml-auto">$3.99</div>
            </div>
              <div className="flex flex-row items-center px-5">
                <div className="mr-auto">Total: $3.99</div>
                <div className="flex items-center"><FaMinus style={{ height: '20px' }} /></div>
                <div className="flex items-center"><img src={inputnum} alt="numimage" style={{ height: '20px' }} /></div>
                <div className="flex items-center"><IoMdAdd style={{ height: '20px' }} /></div>
            </div>

            <div className="h-4  bg-gray-200 mt-5"></div>

        </div>


      <div>
      <div className='section-header ml-5 mt-9'>Delivery Time</div>
      <div className='py-9 flex flex-row items-center justify-between'>
            <div className='Date-text ml-5'>Date</div>
            <div className='date-content mr-1'>Aug 05, 2023</div>
            <div className="arrow mr-5"><FaAngleRight /></div>
        </div>

        <div className="Delivery-time ml-5">Delivery Time</div>
        <div className=''>

        <div className='flex items-center justify-evenly'>
      
            <div className='badge'>
              <img src={badge} alt="" />
              </div>
    
           <div className=''>
            <div className='day-text'>Morning</div>
            <div className="time-text">06:00 AM - 10:00 AM</div>
            </div>
          
            <div className=''>
            <div className="round-1" type="Default"checked="yes"></div>
            </div>

            </div>


          
        <div className='flex items-center justify-evenly'>
      
      <div className='badge'>
        <img src={badge} alt="" />
        </div>

     <div className=''>
      <div className='day-text'>Morning</div>
      <div className="time-text">06:00 AM - 10:00 AM</div>
      </div>
    
      <div className=''>
      <div className="round-1" type="Default"checked="yes"></div>
      </div>

      </div>

      
      <div className='flex items-center justify-evenly'>
      
      <div className='badge'>
        <img src={badge} alt="" />
        </div>

     <div className=''>
      <div className='day-text'>Morning</div>
      <div className="time-text">06:00 AM - 10:00 AM</div>
      </div>
    
      <div className=''>
      <div className="round-1" type="Default"checked="yes"></div>
      </div>

      </div>

            </div>

            <div className="h-4  bg-gray-200 mt-5"></div>
    
        </div>


        <div className="flex flex-row justify-between items-center m-5 rounded-xl border border-gray-300 p-5 h-20 w-90">
        <div>
          <img src={badge1} alt="badge" />
        </div>
        <div className='content-text-1'>Discount 10% applied</div>
          <div><MdOutlineEdit /></div>
        </div>


        <div className="rounded-t-3xl bg-cyan-50 h-90 mt-9 ">
        <div className="py-9">
          <div className="flex flex-row justify-between px-6 py-2">
            <div>Total Amount</div>
            <div>$3.99</div>
          </div>

          <div className="flex flex-row justify-between px-6 py-2">
            <div>Deliver Charge</div>
            <div>$3.99</div>
          </div>

          <div className="flex flex-row justify-between px-6 py-2">
            <div>Packing Charge</div>
            <div>Free</div>
          </div>

          <div className="flex flex-row justify-between px-6">
            <div className="font-bold text-xl">Sub Total</div>
            <div className="font-bold text-xl text-red-500">$3.99</div>
          </div>
        </div>
        <div className=" relative m-auto rounded-xl border border-green-900 bg-green-800  h-20 w-90 p-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
            Checkout
          </div>
        </div>
      </div>




    </div>
  )
}

export default CheckOut