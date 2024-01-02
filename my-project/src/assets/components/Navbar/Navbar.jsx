import React from "react";
import { BsCart } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-0 px-10 bg-white">
      <div className="flex items-center">
        <h1 className="mr-5 text-xl">MOBOR STORE</h1>
        <form className="flex items-center border-b-black rounded-md border-solid p-3">
          <input
            type="text"
            placeholder="Search Products"
            className="flex-1 flex items-center h-full py-1 px-5 text-base font-bold border-gray-500 border-solid rounded-l-md border outline-none"
          />
          <button
            type="button"
            className="h-full py-1 px-2 text-base font-semibold rounded-r-md border-none bg-gray-600 text-white cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex items-center text-base">
        <a
          href="#"
          className="flex items-center m-3 font-semibold cursor-pointer"
        >
          Home
        </a>
        <a
          href="/products"
          className="flex items-center m-3 font-semibold cursor-pointer"
        >
          Products
        </a>
        <a
          href="/login"
          className="flex items-center m-3 font-semibold cursor-pointer"
        >
          LogIn
        </a>
        <a
          href="/signup"
          className="flex items-center m-3 font-semibold cursor-pointer"
        >
          SignUp
        </a>
        <a
          href="/myorders"
          className="flex items-center m-3 font-semibold cursor-pointer"
        >
          My Orders
        </a>
        <a
          href="/logout"
          className="flex items-center m-3 font-semibold cursor-pointer"
        >
          LogOut
        </a>
        <a
          href="/cart"
          className="flex items-center m-3 font-semibold cursor-pointer"
        >
          Cart{" "}
          {/*  <p className="flex items-center justify-center w-5 h-5 rounded-full bg-[#6457f9] text-white font-base ml-1">
            0
          </p>
  */}
          <BsCart className="ml-2" />
        </a>
      </div>
    </nav>
  );
}
