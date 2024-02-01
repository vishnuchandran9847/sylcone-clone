import React, { useEffect } from "react";

import vector from "../../assets/images/Vector.png";
import offer from "../../assets/images/Section Header (2).png";

import buttonimg from "../../assets/images/Button.png";
import { useDispatch, useSelector } from "react-redux";
import { DealSlider } from "../../ReduxAPI/Slice/DealSlice";
import deletebutton from "../CartImages/Button (6).png";
import { addCart,removeCart } from "../../ReduxAPI/Slice/CartSlice";


function OfferDeals() {

const dispatch = useDispatch();
const DealItems = useSelector((state)=>state.deal.DealSlider);

const CartProducts = useSelector((state) => state.cart);

useEffect(() => {

  dispatch(DealSlider());

}, [dispatch])


  return (
    <div className="bg-pink-50">
      <div className="flex flex-row justify-between m-5 px-4 ">
        <div className="">
          <h1 className="text-3xl font-extrabold text-red-700 py-4">
            Today's Deals
          </h1>
        </div>

        <div className="position relative py-1">
          <img className="" src={vector} alt="vector" />
          <img
            className="position absolute"
            src={offer}
            alt="offer"
            style={{ bottom: 25, right: 13 }}
          />
        </div>
      </div>

      <p className="px-4 ">Deals per day....</p>

      

      <div className="flex flex-row overflow-x-auto">
        {DealItems && DealItems.map((dealoffer, id) => (
          <div  key={id} className="m-5 rounded-xl p-3 h-70 w-60  ">
            <div className="w-32 bg-white rounded-xl">
              <img
                className="w-32 h-32 object-contain"
                src={`https://sylcon.howincloud.com/public/${dealoffer.images[0].image}`}
                alt="product"
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold mt-2">{dealoffer.name}</h1>
            </div>
            <div className="">
              <p className="text-sm text-gray-600">{dealoffer.description}</p>
            </div>
            <div className="flex flex-row justify-between  mt-2">
              <div className="">
                {/* <img src={price} alt="price" /> */}
                <p className="text-sm text-gray-600">{dealoffer.sell_price}</p>
              </div>


              {CartProducts?.cartitems?.find((cp) => cp?.id === dealoffer?.id) !==  undefined ? (
                <div>
                  {CartProducts?.cartitems
                    ?.filter((cp) => cp?.id === dealoffer?.id)
                    .map((item) => (
                      <div className="flex items-center">
                         <div
                          onClick={() => {
                            const product = Object.assign({}, dealoffer, {
                              quantity: 1,allRemove:false
                            });
                            dispatch(removeCart(product));
                          }}
                        >
                           <img src={deletebutton} alt="Delete" />
                        </div>
                        <div>{item?.quantity} </div>
                        <div  
                          onClick={() => {
                            const product = Object.assign({}, dealoffer, {
                              quantity: 1,
                            });
                            dispatch(addCart(product));
                          }}
                        >
                          <img src={buttonimg} alt="buttonimg" />
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div
                  onClick={() => {
                    const product = Object.assign({}, dealoffer, {
                      quantity: 1
                    });
                    dispatch(addCart(product));
                  }}
                >
                  <img src={buttonimg} alt="button" />
                </div>
              )}


              {/* <div>
                <img src={buttonimg} alt="buttonimg" />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferDeals;
