import React, { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesProduct } from "../ReduxAPI/Slice/CategorySlice";


function Products() {

const dispatch = useDispatch();
const productlist = useSelector((state)=>state.Category.CategoriesProduct);

useEffect(() => {
 
      dispatch(CategoriesProduct());

}, [dispatch]);



  return (
    <div className="products">
      <h4 className=" px-3 py-2 mt-3 text-md font-bold">What are you looking for?</h4>

      

      <div className="grid grid-cols-4 gap-5 px-4 py-4 rounded-md">

        {productlist && productlist.map((categoryimg, id) => (
          <div className="flex flex-col items-center justify-center text-center h-20 ">
            <div key={id}>
              <img
                className="rounded-lg object-cover h-14 w-full mb-2 "
                src={`https://sylcon.howincloud.com/public/${categoryimg.image}`}
                alt=""
              />
              <p className="text-center">{categoryimg.name} </p>
            </div>
          </div>
        ))}

      </div>

      <div className="flex justify-center mt-5">
        <button className="bg-green-900 text-white py-1 px-9 ">
          View More
        </button>
      </div>
    </div>
  );
}

export default Products;
