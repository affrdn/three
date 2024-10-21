import React from "react";
import { FaEnvelope, FaTelegramPlane, FaMedium } from "react-icons/fa"; // Import the email, Telegram, and Twitter icons
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full pt-8 pb-2  bottom-0 bg-[#849b33]">
      <div className="flex justify-center items-center py-2 space-x-4 text-green-950">
        <a
          href="mailto:grootapustaja@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-full border-green-950  p-2 border-2 border-custom-blue  hover:scale-125 transition-transform duration-200">
            <FaEnvelope />
          </div>
        </a>

        <a
          href="https://t.me/apugrootsol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-full border-green-950 p-2 border-2 border-custom-blue  hover:scale-125 transition-transform duration-200">
            <FaTelegramPlane />
          </div>
        </a>

        <a
          href="https://www.x.com/apugrootsol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-full border-green-950 p-2 border-2 border-custom-blue  hover:scale-125 transition-transform duration-200">
            <FaXTwitter />
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
