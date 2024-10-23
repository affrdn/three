import React from "react";
import Telegram from "../assets/1.png";
import Twitter from "../assets/2.png";
import Mail from "../assets/3.png";

const Footer = () => {
  return (
    <footer className="w-full pt-8 pb-2  bottom-0 bg-[#849b33]">
      <div className="flex justify-center items-center py-2 space-x-4 text-green-950">
        <a
          href="mailto:grootapustaja@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-full border-black p-1 border-2 hover:scale-125 transition-transform duration-200">
            <img src={Mail} alt="Mail" className="lg:h-8 lg:w-8 h-6 w-6" />
          </div>
        </a>

        <a
          href="https://x.com/apugrootsol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-full border-black p-1 border-2 hover:scale-125 transition-transform duration-200">
            <img
              src={Telegram}
              alt="Telegram"
              className="lg:h-8 lg:w-8 h-6 w-6"
            />
          </div>
        </a>

        <a
          href="https://www.x.com/apugrootsol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-full border-black p-1 border-2 hover:scale-125 transition-transform duration-200">
            <img
              src={Twitter}
              alt="Twitter"
              className="lg:h-8 lg:w-8 h-6 w-6"
            />
          </div>
        </a>
      </div>
      <div className="container mx-auto text-center ">
        <p className="font-bold">
          <span>© 2024 </span>
          <span>A P U G R O O T</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
