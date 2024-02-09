import React, { useEffect, useState } from "react";
import navicon from "../../assets/images/Group (1).png";

import mandarin from "../../assets/images/Image (7).png";
import inputnum from "../../assets/images/Input.png";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import badge from "../../assets/images/Badge.png";
import badge1 from "../CartImages/Badge (2).png";
import { MdOutlineEdit } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import noImage from "../../assets/images/image 38.png";
import { addCart, removeCart } from "../../ReduxAPI/Slice/CartSlice";
import { IoIosCloseCircle } from "react-icons/io";
import addbutton from "../../assets/images/Button.png";
import deletebutton from "../CartImages/Button (6).png";

function CheckOut() {

  const dispatch = useDispatch();
  
  const [selected, setSelected] = useState(null);

  const { id } = useParams();
  const cartitems = useSelector((state) => state.cart.cartitems);
  const cartProducts = useSelector((state) => state.cart);
  const [count, setCount] = useState(0);
  const [filteredCartItems, setFilteredCartItems] = useState([]);


  useEffect(() => {
    // Filter cart items based on the 'id' parameter
    const filteredItems = cartitems.filter((item) => item.id === id);
    setFilteredCartItems(filteredItems);

    // You can perform other actions based on the filtered items if needed
    // For example, if you want to update the count based on the filtered items
    // setCount(filteredItems.length > 0 ? filteredItems[0].count : 0);
  }, [cartitems, id]);

  const addItems = () => {
    setCount(count + 1);
  };
  const deleteItems = () => {
    setCount(count - 1);
  };









  return (
    <div>
      <div className="flex flex-row items-center mt-8">
        <div className="ml-5">
          <Link to={"/cart"}>
            <img className="left-arrow" src={navicon} alt="" />
          </Link>
        </div>
        <div className="check-text mx-auto">Checkout</div>
      </div>

      <div className="py-9 flex flex-row justify-between">
        <div className="Address-text ml-5">Delivery Address</div>
        <div className="change-text mr-5">Change</div>
      </div>

      <div className="text-box mb-14">
        <div className="flex flex-row">
          <div className="name-text">John Doe</div>
          <div className="dot-text">•</div>
          <div className="add-text">714 430 2816</div>
        </div>
        <div>
          <div className="content-text">
            854 Liberty Avenue <br /> Kochi, KL 693546
          </div>
        </div>
      </div>

      <div className="h-3  bg-gray-200 mt-5"></div>

      <div>
        <div className="section-header ml-5 mt-9">Order Detail</div>

        {/* <div className="flex flex-row items-center justify-between px-5 py-5">
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
          <div className="flex items-center">
            <FaMinus style={{ height: "20px" }} />
          </div>
          <div className="flex items-center">
            <img src={inputnum} alt="numimage" style={{ height: "20px" }} />
          </div>
          <div className="flex items-center">
            <IoMdAdd style={{ height: "20px" }} />
          </div>
        </div>  */}



        {cartitems.map((cartProduct) => (
        <div key={cartProduct?.id}>
          <div className="flex flex-row justify-between px-5 py-5">
          <div className="flex flex-col items-center justify-between ">
            <div>
              {cartProduct?.images?.length > 0 ? (
                <img
                  src={`https://sylcon.howincloud.com/public/${cartProduct?.images[0]?.image}`}
                  alt="imagecabbage"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <img
                  src={noImage}
                  alt="imagecabbage"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
            <div>{cartProduct.name}</div>
            <div>{cartProduct.description}</div>
          </div>
            <div
              onClick={() => {
                const product = Object.assign({}, cartProduct, {
                  quantity: 1,
                  allRemove: true,
                });
                dispatch(removeCart(product));
              }}
            >
              {" "}
             <IoIosCloseCircle />
            </div>
          </div>

          <div className="flex flex-row items-center px-5">
            <div className="mr-auto">Total: {cartProduct.sell_price}</div>

            <div className="flex items-center">
              <div
                onClick={() => {
                  const product = Object.assign({}, cartProduct, {
                    quantity: 1,
                    allRemove: false,
                  });
                  dispatch(removeCart(product));
                }}
              >
                <img src={deletebutton} alt="Delete" />
              </div>
              <div className="px-2">{cartProduct?.quantity} </div>
              <div
                onClick={() => {
                  const product = Object.assign({}, cartProduct, {
                    quantity: 1,
                  });
                  dispatch(addCart(product));
                }}
              >
                <img src={addbutton} alt="buttonimg" />
              </div>
            </div>
          </div>

          <div className="h-1  bg-gray-200 mt-5"></div>
        </div>
      ))}














        {/* <div className="h-1  bg-gray-200 mt-5"></div> */}

        {/* <div className="flex flex-row items-center justify-between px-5 py-5">
          <div>
            <img src={mandarin} alt="imagecabbage" />
          </div>
          <div className="ml-4">
            <div>Cabbage</div>
            <div>Approx lb</div>
          </div>
          <div className="ml-auto">$3.99</div>
        </div> */}

        {/* <div className="flex flex-row items-center px-5">
          <div className="mr-auto">Total: $3.99</div>
          <div className="flex items-center">
            <FaMinus style={{ height: "20px" }} />
          </div>
          <div className="flex items-center">
            <img src={inputnum} alt="numimage" style={{ height: "20px" }} />
          </div>
          <div className="flex items-center">
            <IoMdAdd style={{ height: "20px" }} />
          </div>
        </div> */}

        {/* <div className="h-1  bg-gray-200 mt-5"></div> */}

        {/* <div className="flex flex-row items-center justify-between px-5 py-5">
          <div>
            <img src={mandarin} alt="imagecabbage" />
          </div>
          <div className="ml-4">
            <div>Cabbage</div>
            <div>Approx lb</div>
          </div>
          <div className="ml-auto">$3.99</div>
        </div> */}
        {/* <div className="flex flex-row items-center px-5">
          <div className="mr-auto">Total: $3.99</div>
          <div className="flex items-center">
            <FaMinus style={{ height: "20px" }} />
          </div>
          <div className="flex items-center">
            <img src={inputnum} alt="numimage" style={{ height: "20px" }} />
          </div>
          <div className="flex items-center">
            <IoMdAdd style={{ height: "20px" }} />
          </div>
        </div> */}

        <div className="h-4  bg-gray-200"></div>
      </div>

      <div>
        <div className="section-header ml-5 mt-9">Delivery Time</div>
        <div className="py-9 flex flex-row items-center justify-between">
          <div className="Date-text ml-5">Date</div>
          {/* <div className='date-content mr-1' >Aug 05, 2023</div> */}
          <input type="date" className="date-content mr-1" />
          <div className="arrow mr-5">
            <FaAngleRight />
          </div>
        </div>

        <div className="Delivery-time ml-5">Delivery Time</div>
        <div className="">
          <div
            className="flex items-center justify-evenly"
            onClick={() => {
              setSelected("MORNING");
            }}
          >
            <div className="badge">
              <img src={badge} alt="" />
            </div>

            <div className="">
              <div className="day-text">Morning</div>
              <div className="time-text">06:00 AM - 10:00 AM</div>
            </div>

            <div className="">
              <input
                className={selected === "MORNING" ? "round-1" : "round-2"}
                type="Default"
                checked={true}
              />
            </div>
          </div>

          <div
            className="flex items-center justify-evenly"
            onClick={() => {
              setSelected("NOON");
            }}
          >
            <div className="badge">
              <img src={badge} alt="" />
            </div>

            <div className="">
              <div className="day-text">Noon</div>
              <div className="time-text">06:00 AM - 10:00 AM</div>
            </div>

            <div className="">
              <input
                className={selected === "NOON" ? "round-1" : "round-2"}
                type="Default"
                checked={true}
              />
            </div>
          </div>

          <div
            className="flex items-center justify-evenly"
            onClick={() => {
              setSelected("EVENING");
            }}
          >
            <div className="badge">
              <img src={badge} alt="" />
            </div>

            <div className="">
              <div className="day-text">Evening</div>
              <div className="time-text">06:00 AM - 10:00 AM</div>
            </div>

            <div className="">
              <input
                className={selected === "EVENING" ? "round-1" : "round-2"}
                type="Default"
                checked={true}
              />
            </div>
          </div>
        </div>

        <div className="h-4  bg-gray-200 mt-5"></div>
      </div>

      <div className="flex flex-row justify-between items-center m-5 rounded-xl border border-gray-300 p-5 h-20 w-90">
        <div>
          <img src={badge1} alt="badge" />
        </div>
        <div className="content-text-1">Discount 10% applied</div>
        <div>
          <MdOutlineEdit />
        </div>
      </div>

      <div className="rounded-t-3xl bg-cyan-50 h-90 mt-9 ">
        <div className="py-9">
          <div className="flex flex-row justify-between px-6 py-2">
            <div>Total Amount</div>
            <div>{parseFloat(cartProducts?.totalAmount).toFixed(2)}</div>
          </div>

          <div className="flex flex-row justify-between px-6 py-2">
            <div>Deliver Charge</div>
            <div>Free</div>
          </div>

          <div className="flex flex-row justify-between px-6 py-2">
            <div>Packing Charge</div>
            <div>Free</div>
          </div>

          <div className="flex flex-row justify-between px-6">
            <div className="font-bold text-xl">Sub Total</div>
            <div className="font-bold text-xl text-red-500">{parseFloat(cartProducts?.totalAmount).toFixed(2)}</div>
          </div>
        </div>


        <div className=" relative ml-8 mr-8 rounded-xl border border-green-900 bg-green-800  h-12 w-90">

          <Link to={"/payment"}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
            Checkout
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
