'use cliect'

import { FaShippingFast } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";




export default function SecLastBottom(){
    return(
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center  mt-9">
        <div className="   ml-5 text-center mb-6 md:mb-6">
          <FaShippingFast className=" text-3xl mb-4 mx-auto text-white w-16 h-16 rounded-full bg-black border-4 border-gray-400 " />
          <h2 className="text-xl font-bold mb-2">FREE AND FAST DELIVERY</h2>
          <p className="text-gray-600">
            Free Delivery for all oders over $140
          </p>
        </div>
        <div className="   text-center mb-6 md:mb-6">
        <RiCustomerServiceLine  className=" text-2xl mb-4 mx-auto text-white w-16 h-16 rounded-full bg-black border-4 border-gray-400 " />
          <h2 className="text-2xl font-bold mb-2">24/7 CUSTOMER SERVICE</h2>
          <p className="text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className=" p-6  text-center mb-6 md:mb-6">
        <GiPayMoney    className="text-3xl mb-4 mx-auto  text-white w-16 h-16 rounded-full bg-black border-4 border-gray-400  "/>
          <h2 className="text-2xl font-bold mb-2">MONEY BACK GARANTEE</h2>
          <p className="text-gray-600">
            We return money within 30 days
          </p>{" "}
        </div>
      </div>
        </div>
    )
}