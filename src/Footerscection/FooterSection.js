import React from 'react'
import Home from "../Footerscection/Homeicon.jpg";
import order from "../Footerscection/ordericon.jpg";
import cart from "../Footerscection/carticon.jpg";
import account from "../Footerscection/Menu.png";
import rectangle from "../Footerscection/Rectangle.png";
import { Link } from 'react-router-dom';

function FooterSection() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-4 mb-2">
            <img src={Home} alt="" />
            <img src={order} alt="" />
            <Link to={"/cart"}>
            <img src={cart} alt="" />
            </Link>
            <img src={account} alt="" />
      </div>
            <div className='flex justify-center items-center mb-4'>
            <img className='' src={rectangle} alt="" />
            </div>
    </div>
  )
}

export default FooterSection
