import React from "react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Banner from "../../Components/Banner/Banner";
import Products from "../../Components/Products/Products";
import Offers from "../../Components/Offers/Offers";
import Featproducts from "../../Components/Featproducts/Featproducts";
import Viewproduct from "../../Components/ViewAllproduct/Viewproduct";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import SecondBanner from "../../Components/SecondBanner/SecondBanner";
import Electronics from "../../Components/Electronics/Electronics";
import ShoesBags from "../../Components/ShoesBags/ShoesBags";
import Bakery from "../../Components/Bakery/Bakery";
import Discover from "../../Components/Discover/Discover";
import DiscoverProduct from "../../Components/DiscoverProducts/DiscoverProduct";
import OrderPickup from "../../Components/OrderPickup/OrderPickup";
import FooterSection from "../../Components/Footerscection/FooterSection";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import OfferDeals from "../Deals/OfferDeals";



function Home() {
  return (
    <div>
      
        <Header />
        <Link to="/search">
          <div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search anything..."
          className="search-bar"  /> 

        <div className="search-icon">
          <CiSearch />
        </div>
          </div>
        </div>
        </Link>
        <Banner />
        <Products />
        <Offers />
        <Featproducts />
        <OfferDeals/>
        <Viewproduct />
        <PopularProducts />
        <SecondBanner />
        <Electronics />
        <ShoesBags />
        <Bakery />
        <Discover />
        <DiscoverProduct />
        <OrderPickup />
        <FooterSection />
    
    </div>
  );
}

export default Home;
