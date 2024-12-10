'use client'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function TopHeader(){
    return(
        <div className="bg-black text-white flex sm:flex-auto items-center">
            <p className="md:ml-auto flex flex-wrap items-center text-base justify-center">Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!</p>
               <h3 className="font-bold ">ShopNow </h3>
               
               <div className="md:ml-auto md:mr-20 flex  items-center text-base ">
                <p >English </p><RiArrowDropDownLine className="w-7 h-7" />
               </div>
        </div>
    )
}