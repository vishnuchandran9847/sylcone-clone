import React, { useEffect, useState } from "react";
import "./Search.css";
import { CiSearch } from "react-icons/ci";
import { input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { SearchProduct } from "../../ReduxAPI/Slice/SearchSlice";
import { addCart, removeCart } from "../../ReduxAPI/Slice/CartSlice";
import deletebutton from "../CartImages/Button (6).png";
import buttonimg from "../../assets/images/Button.png";

function Search() {


  const CartProducts = useSelector((state) => state.cart);



  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [text, setText] = useState(null);
  //   const items = useSelector((state) => state.search.searches);

  //   useEffect(() => {
  //     dispatch(Searchproduct())
  // }, [dispatch]);

  const handleSearchJobs = (event) => {
    const inputValue = event.target.value || null; // Set to null if falsy
    setText(inputValue);
    console.log(inputValue);

    const formData = new FormData();
    formData.append("token", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N5bGNvbi5ob3dpbmNsb3VkLmNvbS9wdWJsaWMvYXBpL3ZlcmlmeS1vdHAiLCJpYXQiOjE3MDQ3ODc4MDEsIm5iZiI6MTcwNDc4NzgwMSwianRpIjoibVhEMXoySjRJY2IxTTJtaCIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.0fq8TpmsNHOO_mQQ39R_w9TgsyFSO-RhG1Se7ZOnWJU');
    formData.append("input", inputValue);
    dispatch(SearchProduct(formData)).then((response) => { 
      setItems(response.payload.data.items);
    });
  };

  return (
    <div className="px-3"> 
      <div className="search-container">
        <input
          type="text"
          placeholder="Search anything..."
          className="search-bar"
          onChange={(e) => {
            handleSearchJobs(e);
          }}
        />
        {/* <span className='search-icon'><CiSearch /></span> */}

        <div className="search-icon">
          <CiSearch />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-4 py-4 rounded-md">

        {text!==null&& items ? items.map((item, id) => (
          <div className="flex flex-col items-center justify-center text-center h-30 mt-3 p-3 rounded-lg" style={{boxShadow:'0px 0px 20px 2px #00000015'}}>
            <div key={id}>
              <img
                className="rounded-lg object-contain h-32 w-32 mb-2 "
                src={`https://sylcon.howincloud.com/public/${item.images[0].image}`}
                alt=""
              />
              <p className="text-start">{item.name} </p>

            </div>

          <div>
          <p className="text-sm text-gray-600">{item.description}</p>
          </div>

          <div className="flex flex-row justify-between  mt-2">

        <div className="">
          <p className="text-sm text-gray-600">{item.sell_price}</p>
        </div>


        {CartProducts?.cartitems?.find((cp) => cp?.id === item?.id) !==  undefined ? (
                 <div>
                  {CartProducts?.cartitems
                    ?.filter((cp) => cp?.id === item?.id)
                    .map((item) => (
                      <div className="flex items-center">
                         <div
                          onClick={() => {
                            const product = Object.assign({}, item, {
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
                            const product = Object.assign({}, item, {
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
                      const product = Object.assign({}, item, {
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
        )):(
          <div>
            Search Data
            </div>
        )}

      </div>
    </div>
  );
}

export default Search;
