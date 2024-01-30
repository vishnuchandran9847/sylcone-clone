import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OfferBanner } from "../ReduxAPI/Slice/OfferSlice";

function Offers() {

const dispatch = useDispatch();

const OfferSlider = useSelector((state)=>state.offer.OfferBanner);

useEffect(() => {

      dispatch(OfferBanner());  

}, [dispatch])


  return (
    <div className="offer-name">
      <h2 className="px-3 m-4 text-lg font-bold">Today's Offers</h2>

      <div className="flex flex-row overflow-x-auto">
        <div className="bg-white box shadow-xl px-5 py-5">
         
        <div className="flex space-x-4 overflow-x-auto">
          
            {OfferSlider && OfferSlider.map((offer, id) => (
              <div key={id} className="w-60 bg-white rounded-xl">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={`https://sylcon.howincloud.com/public${offer.image}`}
                  alt="offerimage"
                />
              </div>

            ))}

             </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
