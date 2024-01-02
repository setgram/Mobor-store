import React from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Home from "./Home/Home";

export default function App() {
  return (
    <div className="grid grid-rows-[80px,auto]">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}
