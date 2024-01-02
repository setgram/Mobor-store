import React from "react";
import iphone from "./Image/iphone.jpg";
import mac from "./Image/mac.jpg";
import { BsCart } from "react-icons/bs";
import FeatureProducts from "./FeatureProducts";

export default function HeroSection() {
  return (
    <>
      <section className="grid grid-cols-2 h-[550px] py-0 px-14 text-black bg-white">
        <div className="flex items-center justify-center flex-col text-center">
          <h2 className="font-bold text-[45px] mb-3">Buy Iphone 14 pro</h2>
          <p className="text-[24px] mb-7 w-[70%]">
            Experience the power of the latest Ihpne 14 with our most pro camera
            ever
          </p>
          <a
            href=""
            className="rounded-full py-[16px] px-[32px] uppercase tracking-[1.5px] border-2 border-solid border-white bg-black text-white  hover:text-slate-600 transition-all ease-in-out"
          >
            Buy Now
          </a>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <img
            src={iphone}
            alt=""
            className="h-[500px] transition-all ease-in-out hover:scale-[1.05]"
          />
        </div>
      </section>
      <FeatureProducts />
      <section className="grid grid-cols-2 h-[550px] py-0 px-14 text-black bg-white">
        <div className="flex items-center justify-center flex-col text-center">
          <h2 className="font-bold text-[45px] mb-3">
            Build the ultimate setup
          </h2>
          <p className="text-[24px] mb-7 w-[70%]">
            You can add studio display and colour-matched magic accessories to
            your bag after configure Mac mini
          </p>
          <a
            href=""
            className="rounded-full py-[16px] px-[32px] uppercase tracking-[1.5px] border-2 border-solid border-white bg-black text-white  hover:text-slate-600 transition-all ease-in-out"
          >
            Buy Now
          </a>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <img
            src={mac}
            alt=""
            className="h-[500px] transition-all ease-in-out hover:scale-[1.05]"
          />
        </div>
      </section>
    </>
  );
}
