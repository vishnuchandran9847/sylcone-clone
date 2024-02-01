import React from "react";
import Home from "../Footerscection/Homeicon.jpg";
import order from "../Footerscection/ordericon.jpg";
import cart from "../Footerscection/carticon.jpg";
import account from "../Footerscection/Menu.png";
import rectangle from "../Footerscection/Rectangle.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import { IoMdHome } from "react-icons/io";
import { IoReorderFour } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

function FooterSection() {
  return (
    
      <div className="">
        <div className="flex flex-row justify-around">
          {/* <img src={Home} alt="" /> */}
          <div className="home-text">
            <IoMdHome />
          </div>
          {/* <img src={order} alt="" /> */}
          <div className="order-text">
            <IoReorderFour />
          </div>

          <Link to={"/cart"}>
            {/* <img src={cart} alt="" /> */}
            <BsCart3 className="cart-text" />
          </Link>
          {/* <img src={account} alt="" /> */}
          <div className="account-text">
            <VscAccount />
          </div>
        </div>
      

      {/* <div className='home-indicator flex flex-row justify-center items-center'></div> */}
      {/* <img className='' src={rectangle} alt="" /> */}
    </div>
  );
}

export default FooterSection;
