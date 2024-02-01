import React from "react";
import Header from "../Header/Header";
import Search from "../Components/Search/Search";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Offers from "../Offers/Offers";
import Featproducts from "../Components/Featproducts/Featproducts";
import OfferDeals from "../Deals/OfferDeals";
import Viewproduct from "../Components/ViewAllproduct/Viewproduct";
import PopularProducts from "../PopularProducts/PopularProducts";
import SecondBanner from "../Components/SecondBanner/SecondBanner";
import Electronics from "../Components/Electronics/Electronics";
import ShoesBags from "../Components/ShoesBags/ShoesBags";
import Bakery from "../Bakery/Bakery";
import Discover from "../Components/Discover/Discover";
import DiscoverProduct from "../DiscoverProducts/DiscoverProduct";
import OrderPickup from "../OrderPickup/OrderPickup";
import FooterSection from "../Components/Footerscection/FooterSection";



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
