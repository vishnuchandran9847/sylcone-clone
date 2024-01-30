import React, { useEffect } from "react";
import buttonimg from "../images/Button.png";
import deletebutton from "../CartImages/Button (6).png";
import { useDispatch, useSelector } from "react-redux";
import { DiscoverSlider } from "../ReduxAPI/Slice/DiscoverProductSlice";
import { addCart,removeCart } from "../ReduxAPI/Slice/CartSlice";

function DiscoverProduct() {
  const dispatch = useDispatch();

  const DiscoverItems = useSelector((state) => state.Discover.DiscoverSlider);
  const CartProducts = useSelector((state) => state.cart);

  console.log(CartProducts, "sss");
  useEffect(() => {
    dispatch(DiscoverSlider());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 mb-5 ">
      {DiscoverItems &&
        DiscoverItems.map((discover, id) => (
          <div key={id} className="  border border-gray-300 p-4">
            <div className="flex justify-center items-center mb-3">
              <img
                className="w-32 h-32 object-contain"
                src={`https://sylcon.howincloud.com/public/${discover.images[0].image}`}
                alt="discoverimages"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold mt-2">{discover.name}</h1>
            </div>
            <div>
              <p className="text-sm text-gray-600">{discover.description}</p>
            </div>
            <div className="flex justify-between mt-2">
              <div>
                {/* <img src={price} alt="price" /> */}
                <p className="text-sm text-gray-600">{discover.sell_price}</p>
              </div>
              
              {CartProducts?.cartitems?.find((cp) => cp?.id === discover?.id) !==  undefined ? (
                <div>
                  {CartProducts?.cartitems
                    ?.filter((cp) => cp?.id === discover?.id)
                    .map((item) => (
                      <div className="flex items-center">
                         <div
                          onClick={() => {
                            const product = Object.assign({}, discover, {
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
                            const product = Object.assign({}, discover, {
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
                    const product = Object.assign({}, discover, {
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
  );
}

export default DiscoverProduct;
