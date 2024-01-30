import React from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Offers from "../Offers/Offers";
import Featproducts from "../Featproducts/Featproducts";
import OfferDeals from "../Deals/OfferDeals";
import Viewproduct from "../ViewAllproduct/Viewproduct";
import PopularProducts from "../PopularProducts/PopularProducts";
import SecondBanner from "../SecondBanner/SecondBanner";
import Electronics from "../Electronics/Electronics";
import ShoesBags from "../ShoesBags/ShoesBags";
import Bakery from "../Bakery/Bakery";
import Discover from "../Discover/Discover";
import DiscoverProduct from "../DiscoverProducts/DiscoverProduct";
import OrderPickup from "../OrderPickup/OrderPickup";
import FooterSection from "../Footerscection/FooterSection";



function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      
        <Header />
        <Search />
        <Banner />
        <Products />
        <Offers />
        <Featproducts />
        <OfferDeals />
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
