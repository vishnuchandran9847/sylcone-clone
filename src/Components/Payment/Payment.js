import React, { useState } from "react";
import navicon from "../../assets/images/Group (1).png";
import { Link } from "react-router-dom";
import pay1 from "../../assets/images/Box Icon (7).png";
import pay2 from "../../assets/images/Box Icon (8).png";
import pay3 from "../../assets/images/Box Icon (9).png";
import radio from "../../assets/images/Radio.png";
import { placeNewOrder } from "../../ReduxAPI/Slice/BannerSlice";
import { useDispatch, useSelector } from "react-redux";

function Payment() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const order = useSelector((state) => state.Banner.newOrder);

  const placeOrder = () => {
    // const formData = new FormData();
    // formData.append("user", 1);
    // formData.append("user", 1);
    let formData = [
      {
        user: 1,
        price: 100,
      },
    ];
    dispatch(placeNewOrder(formData));
  };

  console.log(order,'order')

  return (
    <div>
      <div className="flex flex-row items-center mt-8">
        <div className="ml-5">
          <Link to={"/cart"}>
            <img className="left-arrow" src={navicon} alt="" />
          </Link>
        </div>
        <div className="check-text mx-auto">PaymentMethod</div>
      </div>

      <div
        onClick={() => {
          setSelected("CASHONDELIVERY");
        }}
        className="flex flex-row justify-between mt-3 p-5"
      >
        <div className="flex items-center">
          <img className="" src={pay1} alt="" />
          <div className="pay-text ml-5">Cash On Delivery</div>
        </div>
        <div className="check-btn mt-3">
          <input
            className={
              selected === "CASHONDELIVERY" ? "check-btn1" : "check-btn"
            }
            type="Default"
            checked={true}
          />
        </div>
      </div>

      <div className="h-1  bg-gray-200 mt-5"></div>

      <div
        onClick={() => {
          setSelected("UPIBANKING");
        }}
        className="flex flex-row justify-between mt-3 p-5"
      >
        <div className="flex items-center">
          <img className="" src={pay2} alt="" />
          <div className="pay-text ml-5">UPI/Net Banking</div>
        </div>
        <div className="check-btn mt-3">
          <input
            className={selected === "UPIBANKING" ? "check-btn1" : "check-btn"}
            type="Default"
            checked={true}
          />
        </div>
      </div>

      <div className="h-1  bg-gray-200 mt-5"></div>

      <div
        onClick={() => {
          setSelected("CREDITBANKING");
        }}
        className="flex flex-row justify-between mt-3 p-5"
      >
        <div className="flex items-center">
          <img className="" src={pay3} alt="" />
          <div className="pay-text ml-5">Credit/Debit Card</div>
        </div>
        <div className="check-btn mt-3">
          <input
            className={
              selected === "CREDITBANKING" ? "check-btn1" : "check-btn"
            }
            type="Default"
            checked={true}
          />
        </div>
      </div>

      <div className="h-1  bg-gray-200 mt-5"></div>

      <div className="rounded-t-3xl bg-cyan-50 h-90 mt-20 ">
        <div className="py-9">
          <div className="flex flex-row justify-between px-6 py-2">
            <div>Total Amount</div>
            <div>$3.99</div>
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
            <div className="font-bold text-xl text-red-500">$3.99</div>
          </div>
        </div>
        <div
          className=" relative ml-8 mr-8 rounded-xl border border-green-900 bg-green-800  h-12 w-90"
          onClick={() => {
            placeOrder();
          }}
        >

          <Link to={"/orderplace"}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
            Make Payment
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;
