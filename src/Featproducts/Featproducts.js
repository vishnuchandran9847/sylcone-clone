import React, { useEffect } from "react";

import buttonimg from "../images/Button.png";
import { useDispatch, useSelector } from "react-redux";
import { FeaturedItems } from "../ReduxAPI/Slice/FeaturedSlice";
import { addCart,removeCart } from "../ReduxAPI/Slice/CartSlice";
import deletebutton from "../CartImages/Button (6).png";


function Featproducts() {

const dispatch = useDispatch();
const FeaturedList = useSelector((state)=>state.featured.FeaturedItems);

const CartProducts = useSelector((state) => state.cart);


useEffect(() => {

dispatch(FeaturedItems());

}, [dispatch])




  // const addProducts = (product) => {
  //   if (product.quanity) {
  //     product.quanity += 1;
  //   } else {
  //     product.quanity = 1;
  //   }
  //   // Submit(product);
   
  // };

  return (
    <div className="">
      <div className="flex flex-row justify-between m-6">
        <div className="">
          <h2 className="text-lg font-bold">Featured Products</h2>
        </div>
        <div className="">
          <button className="text-green-600">Sea All</button>
        </div>
      </div>

      <div className="px-8">lorem ipsum</div>

      <div className="flex flex-row overflow-x-auto">
        {FeaturedList && FeaturedList.map((feature, id) => (
          <div key={id} className="m-5 rounded-xl border border-gray-300 p-3 h-70 w-60  ">
            <div className="w-60 flex justify-center items-center mb-3">
              <img
                className="w-32 h-32 object-contain"
                src={`https://sylcon.howincloud.com/public/${feature.images[0].image}`}
                alt="images"
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold mt-2">{feature.name}</h1>
            </div>
            <div className="">
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
            <div className="flex flex-row justify-between  mt-2">
              <div className="">
                {/* <img src={feature.sell_price} alt="price" /> */}
                <p className="text-sm text-gray-600">{feature.sell_price}</p>
              </div>

              {CartProducts?.cartitems?.find((cp) => cp?.id === feature?.id) !==  undefined ? (
                <div>
                  {CartProducts?.cartitems
                    ?.filter((cp) => cp?.id === feature?.id)
                    .map((item) => (
                      <div className="flex items-center">
                         <div
                          onClick={() => {
                            const product = Object.assign({}, feature, {
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
                            const product = Object.assign({}, feature, {
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
                    const product = Object.assign({}, feature, {
                      quantity: 1
                    });
                    dispatch(addCart(product));
                  }}
                >
                  <img src={buttonimg} alt="button" />
                </div>
              )}
             {/* <div>
                <img src={buttonimg} alt="button" />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featproducts;
