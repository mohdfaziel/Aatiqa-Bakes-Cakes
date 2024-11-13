import { useState } from "react";
import { light, logo,ig, shop } from "../../assets/Images/images.js";
import Buy from "./Buy.jsx";
export default function NavBar() {
  const [active, setActive] = useState("home");
  return (
    <div className="w-full z-50 flex justify-center items-center fixed top-3 bg-transparent">
      <div className="container w-[99%] md:w-[90%] py-2 backdrop-blur-md px-2 rounded-full flex justify-between items-center">
        <a
          href="https://www.instagram.com/aatiqa_bakesandcakes?igsh=djB2aTNndjIwbHk0"
          target="_blank"
        >
          <div className="logo hover:scale-105 transition-all gap-2 flex justify-center items-center">
            <img src={logo} className="w-6 pb-2" alt="" />
            <h1 className="text-lg text-main pb-1 font-medium md:font-semibold">
              Aatiqa
            </h1>
          </div>
        </a>
        <div className="options">
          <ul className="flex text-sm font-medium text-unactive gap-5 md:gap-20 justify-center items-center">
            <a href="#home">
              <li
                onClick={() => setActive("home")}
                className={`transition-all cursor-pointer hover:scale-105 h-6 flex flex-col items-center ${
                  active === "home" ? "text-active" : "text-unactive"
                }`}
              >
                <div>Home</div>
                <div
                  className={`w-1 h-1 rounded-full bg-main ${
                    active === "home" ? "inline-block" : "hidden"
                  }`}
                ></div>
              </li>
            </a>
            <a href="#about">
              <li
                onClick={() => setActive("about")}
                className={`transition-all cursor-pointer hover:scale-105 h-6 flex flex-col items-center ${
                  active === "about" ? "text-active" : "text-unactive"
                }`}
              >
                <div>About Us</div>
                <div
                  className={`w-1 h-1 rounded-full bg-main ${
                    active === "about" ? "inline-block" : "hidden"
                  }`}
                ></div>
              </li>
            </a>
          </ul>
        </div>
        <a
          className="order hover:scale-105 transition-all"
         href="https://wa.me/919906072559?text=Hello%20Aatiqa%20Bakes%20%26%20Cakes%0A%20I%20would%20like%20to%20place%20an%20order."
          target="_blank"
        >
          <div>
            <Buy icon={shop} />
          </div>
        </a>
      </div>
    </div>
  );
}
