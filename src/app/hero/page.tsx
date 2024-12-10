

import ProductList from "../components/productList";
import Categories from "../components/categories";
import BestSellingProduct from "../components/bestSellingProduct";
import ExploreProductList from "../components/exploreOurProducts";
import Banner from "../Banner/page";
import FeatureSection from "../components/featuresSec";
import SecLastBottom from "../components/secondLastBottom";

import { FaApple } from "react-icons/fa";



export default  function HeroSection(){
    return(
       <div className="md">
      <section className="text-white body-font bg-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        
          <div className="flex items-center text-white text-4xl">
          <FaApple className="text-white text-6xl" />
          <div className="ml-4">
            <h1 className="">iPhone 14 Series</h1>
            </div>
     
        </div>
        <div className="text-bold ml-20 justify-items-center text-3xl">
          <h1>Up to 10%</h1>
          <h1>off voucher </h1>
        </div>
          <div className="flex justify-center ml-20">
            <button className="inline-flex text-white bg-gradient-to-t from-pink-500 to-blue-500
             hover:from-blue-500 hover:to-pink-500 border-2 border-steal-500 py-2 px-6 focus:outline-none rounded text-lg">Shop Now</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="hero section .png"/>
        </div>
      </div>
    </section>
        
{/* next part*/}
    <div>
          <div className="mt-5 mb-5">
          <img src="project pics/flash sale.png" alt="" />
          </div>
      </div>
             
      <ProductList />
       <Categories/>
       <BestSellingProduct/>
       <Banner/>
       <ExploreProductList/>
       <FeatureSection/>
       <SecLastBottom/>
    </div>
    )
}