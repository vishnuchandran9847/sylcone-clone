import React, { useEffect } from "react";
import buttonimg from "../../assets/images/Button.png";
import { useDispatch, useSelector } from "react-redux";
import { PopularSlider } from "../../ReduxAPI/Slice/PopularSlice";
import { addCart,removeCart } from "../../ReduxAPI/Slice/CartSlice";
import deletebutton from "../CartImages/Button (6).png";



function PopularProducts() {

const dispatch = useDispatch();
const popularitem = useSelector((state)=>state.popular.PopularSlider);
const CartProducts = useSelector((state) => state.cart);

useEffect(() => {
  dispatch(PopularSlider());

}, [dispatch])



  return (
    <div className="">
     <div className="flex flex-row justify-between m-6">
        <div className="">
          <h2 className="text-lg font-bold">Popular Products</h2>
        </div>
      </div> 

      <div className="px-8">lorem ipsum</div>

      <div className="flex flex-row overflow-x-auto">


    {popularitem && popularitem.map((popproducts,id)=>(
    
      <div key={id} className="m-5 rounded-xl border border-gray-300 p-3 h-70 w-60">
      <div className="w-60 flex justify-center items-center mb-3">
        <img
          className="w-32 h-32 object-contain"
          src={`https://sylcon.howincloud.com/public/${popproducts.images[0].image}`}
          alt="popimage"
        />
      </div>
      <div className="">
        <h1 className="text-lg font-bold mt-2">{popproducts.name}</h1>
      </div>
      <div className="">
        <p className="text-sm text-gray-600">{popproducts.description}</p>
      </div>
      <div className="flex flex-row justify-between  mt-2">
        <div className="">
          <p className="text-sm text-gray-600">{popproducts.sell_price}</p>
        </div>

        {CartProducts?.cartitems?.find((cp) => cp?.id === popproducts?.id) !==  undefined ? (
                 <div>
                  {CartProducts?.cartitems
                    ?.filter((cp) => cp?.id === popproducts?.id)
                    .map((item) => (
                      <div className="flex items-center">
                         <div
                          onClick={() => {
                            const product = Object.assign({}, popproducts, {
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
                            const product = Object.assign({}, popproducts, {
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
                      const product = Object.assign({}, popproducts, {
                        quantity: 1
                      });
                      dispatch(addCart(product));
                    }}
                  >
                    <img src={buttonimg} alt="button" />
                  </div>
                )}
              </div>
          </div>
        
    ))}

      </div>
    </div>
  );
}

export default PopularProducts;
