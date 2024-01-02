import React from "react";
import iphone from "./Image/iphone.jpg";
import { FaRegStar } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";

export default function FeatureProducts() {
  return (
    <div>
      <section className="m-[65px]">
        <h2 className="text-[48px] text-center mb-[65px]">Featured Products</h2>
        <div className="flex items-center justify-evenly mb-[65px]">
          <article className="w-[275px] h-[330px] m-[20px] rounded-[12px] shadow-sm bg-white overflow-hidden">
            <div className="h-[200px] text-center border border-solid border-gray-300">
              <a href="products/1">
                <img src={iphone} alt="product " className="h-full" />
              </a>
            </div>
            <div className="product_details">
              <h3 className="product_price">$999</h3>
              <p className="product_title">Iphone 14</p>
              <footer className="flex items-center product_info_footer">
                <div className="flex items-center">
                  <p className="flex items-center product_rating">
                    <FaRegStar /> 5.0{" "}
                  </p>
                  <p className="product_review_count">120</p>
                </div>
                <button className="add_to_cart">
                  <BsCart />
                </button>
              </footer>
            </div>
          </article>
          <article className="w-[275px] h-[330px] m-[20px] rounded-[12px] shadow-sm bg-white overflow-hidden">
            <div className="h-[200px] text-center border border-solid border-gray-300">
              <a href="products/1">
                <img src={iphone} alt="product " className="h-full" />
              </a>
            </div>
            <div className="py-[10px] px-[20px]">
              <h3 className="text-[21px] font-bold ">$999</h3>
              <p className="font-[80px] mt-[4px]">Iphone 14</p>
              <footer className="flex items-center product_info_footer">
                <div className="flex items-center">
                  <p className="flex items-center product_rating">
                    <FaRegStar /> 5.0{" "}
                  </p>
                  <p className="product_review_count">120</p>
                </div>
                <button className="add_to_cart">
                  <BsCart />
                </button>
              </footer>
            </div>
          </article>
          <article className="w-[275px] h-[330px] m-[20px] rounded-[12px] shadow-sm bg-white overflow-hidden">
            <div className="h-[200px] text-center border border-solid border-gray-300">
              <a href="products/1">
                <img src={iphone} alt="product " className="h-full" />
              </a>
            </div>
            <div className="product_details">
              <h3 className="product_price">$999</h3>
              <p className="product_title">Iphone 14</p>
              <footer className="flex items-center product_info_footer">
                <div className="flex items-center">
                  <p className="flex items-center product_rating">
                    <FaRegStar /> 5.0{" "}
                  </p>
                  <p className="product_review_count">120</p>
                </div>
                <button className="add_to_cart">
                  <BsCart />
                </button>
              </footer>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
