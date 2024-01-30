import React, { useEffect } from "react";
import price from "../Electronics/Price.png";
// import addbut from "../Electronics/Button.png";
import { useDispatch, useSelector } from "react-redux";
import { ElectronicSlider } from "../ReduxAPI/Slice/ElectronicSlice";
import { addCart,removeCart } from "../ReduxAPI/Slice/CartSlice";
import deletebutton from "../CartImages/Button (6).png";
import buttonimg from "../images/Button.png";



function Electronics() {

const dispatch = useDispatch();

const ElectronicItems = useSelector((state)=>state.electronic.ElectronicSlider);

const CartProducts = useSelector((state) => state.cart);

useEffect(() => {

dispatch(ElectronicSlider());

}, [dispatch])



  return (
    <div>
      <div className="flex flex-row justify-between m-6">
        <div className="">
          <h2 className="text-lg font-bold">Electronics</h2>
        </div>
        <div className="">
          <button className="text-green-600">Sea All</button>
        </div>
      </div>

      <div className="flex flex-row overflow-x-auto">


    {ElectronicItems && ElectronicItems.map((electronicitems,id)=>(
      <div key={id} className="m-5 rounded-xl p-3 h-70 w-60  ">
      <div className="w-60 bg-white rounded-xl">
        <img
          className="w-32 h-32 object-contain"
          src={`https://sylcon.howincloud.com/public/${electronicitems.image}`}
          alt="electronicproducts"
        />
      </div>
      <div className="">
        <h1 className="text-lg font-bold mt-2">{electronicitems.name}</h1>
      </div>
      <div className="">
        <p className="text-sm text-gray-600">approx 2lb</p>
      </div>
      <div className="flex flex-row justify-between  mt-2">
        <div className="">
          <img src={price} alt="price" />
        </div>
        {/* <div>
          <img src={addbut} alt="addbutton" />
        </div> */}


        {CartProducts?.cartitems?.find((cp) => cp?.id === electronicitems?.id) !==  undefined ? (
                <div>
                  {CartProducts?.cartitems
                    ?.filter((cp) => cp?.id === electronicitems?.id)
                    .map((item) => (
                      <div className="flex items-center">
                         <div
                          onClick={() => {
                            const product = Object.assign({}, electronicitems, {
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
                            const product = Object.assign({}, electronicitems, {
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
                    const product = Object.assign({}, electronicitems, {
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

export default Electronics;
