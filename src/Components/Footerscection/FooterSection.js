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
import { GrHomeRounded } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";


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

{/* <div
      className="bg-white bottom-0 start-50 translate-middle-x w-100  fixed user-select-none Vendor-fixed py-3 px-3 mobile-footer-container"
      style={{ borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}
    >
      <div className="flex flex-row justify-between items-center ">
        <a href={home} className="relative b-r-10 p-2   ">
          <div className="flex flex-col justify-center items-center h-100  ">
            
              <GrHomeRounded style={{ stroke: "black" }} size={22} />

          </div>
        </a>
        <a href={favorites} className="relative b-r-10 p-2 ">
          <div className="flex flex-col justify-center items-center h-100 ">
            
              <FaRegHeart size={22} style={{ color: "black" }} />
           
          </div>
        </a>
        <a href={search} className="relative b-r-10 p-2  ">
          <div className="flex flex-col justify-center items-center h-100 ">
          
              <FiSearch size={22} style={{ color: "black" }} />
           
          </div>
        </a>
        <a href={notification} className="relative b-r-10 p-2  ">
          <div className="flex flex-col justify-center items-center h-100 ">
           
              <PiBellBold size={22} style={{ color: "black" }} />
         
          </div>
        </a>
        <a href={cart} className="relative b-r-10 p-2  ">
          <div className="flex flex-col justify-center items-center h-100 ">
          
              <FiShoppingBag size={22} style={{ color: "black" }} />
            
          </div>
        </a>
      </div>
      </div> */}