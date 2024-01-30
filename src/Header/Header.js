import React from 'react'

import "./Header.css";
import images from "../images/PHOTO-2023-07-17-11-59-02copy 1 (1).png"

import righticon from "../Header/Right Icon.png";
import badge from "../Header/Badge.png";

function Header() {

  return (
    <div className='header'>
        <div className='logoimg'>
            <img className='logo' src={images} alt="logo" />

            <div className="btn">
                <button  className="border border-black rounded-md px-4">Kochi,KL</button>
            </div>

        <div className="icon position relative">
          
            <img src={righticon} alt="" />
            <img className='postion absolute top-0 right-0' src={badge} alt="" />
        </div>

        </div>
      
    </div>
  )
}

export default Header
