import React, { useEffect, useState } from "react";
import icon1 from "../CartImages/Icon (1).png";
import icon2 from "../CartImages/Icon (2).png";
import addbutton from "../../assets/images/Button.png";
import deletebutton from "../CartImages/Button (6).png";
import { IoIosCloseCircle } from "react-icons/io";


// import cababge from "../CartImages/Image (6).png";
// import decreasebutton from "../CartImages/Button (7).png";

// import mandarin from "../CartImages/Image (7).png";
// import beefstew from "../CartImages/Image (8).png";
import noImage from "../../assets/images/image 38.png";

import badge from "../CartImages/Badge (2).png";
import promo from "../CartImages/Apply promotional code.png";
import moveicon from "../CartImages/Icon (3).png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, removeCart } from "../../ReduxAPI/Slice/CartSlice";

function CartProduct() {
  const dispatch = useDispatch();

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
      <div className="flex flex-row justify-between px-5 py-5">
        <div className="font-bold text-2xl">Cart</div>
        <div className="flex flex-row px-5 py-1">
          <div className="ml-5">
            <img src={icon1} alt="searchimage" />
          </div>
          <div className="ml-5">
            <img src={icon2} alt="likeimage" />
          </div>
        </div>
      </div>

      <div className="px-5">send to :</div>

      <div className="h-3  bg-gray-200 mt-5"></div>
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
        <div>
          <img src={decreasebutton} alt="Delete" />
        </div>
        <div className="">
          <img src={inputnum} alt="numimage" />
        </div>
        <div>
          <img src={addbutton} alt="Add" />
        </div>
      </div> */}

      {/* <div className="h-1  bg-gray-200 mt-5"></div>

      <div className="flex flex-row items-center justify-between px-5 py-5">
        <div>
          <img src={beefstew} alt="imagecabbage" />
        </div>
        <div className="ml-4">
          <div>Cabbage</div>
          <div>Approx lb</div>
        </div>
        <div className="ml-auto">$3.99</div>
      </div>

      <div className="flex flex-row items-center px-5">
        <div className="mr-auto">Total: $3.99</div>
        <div>
          <img src={decreasebutton} alt="Delete" />
        </div>
        <div className="">
          <img src={inputnum} alt="numimage" />
        </div>
        <div>
          <img src={addbutton} alt="Add" />
        </div>
      </div> */}

      {/* <div className="h-1  bg-gray-200 mt-5"></div> */}

      <div className="py-4 px-3">
        <div className="font-bold text-xl">Note</div>

        <div className="m-4 rounded-xl border border-gray-300 p-5 h-25 w-90">
          <div className="text-center">
            please check the product before the packaging.
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center m-5 rounded-xl border border-gray-300 p-5 h-20 w-90">
        <div>
          <img src={badge} alt="badge" />
        </div>
        <div>
          <img src={promo} alt="promocode" />
        </div>
        <div>
          <img src={moveicon} alt="icon" />
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
            <div>$3.99</div>
          </div>

          <div className="flex flex-row justify-between px-6 py-2">
            <div>Packing Charge</div>
            <div>Free</div>
          </div>

          <div className="flex flex-row justify-center">
            ------------------------------------------------------------------
          </div>

          <div className="flex flex-row justify-between px-6">
            <div className="font-bold text-xl">Sub Total</div>
            <div className="font-bold text-xl text-red-500">{parseFloat(cartProducts?.totalAmount).toFixed(2)}</div>
          </div>
        </div>
        <div className=" relative m-auto rounded-xl border border-green-900 bg-green-800  h-20 w-90 p-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
