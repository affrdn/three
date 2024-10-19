import React from "react";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import LogoApu from "../assets/ApuLogo1000.png";

const Page1 = () => {
  return (
    <div className="relative bg-gray-900 text-white ">
      <div className="container mx-auto px-4 pt-28 lg:pt-20 ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center space-y-6 ">
            <h1 className="text-5xl lg:text-8xl font-bold mb-4 font-londrina">
              $APUGROOT
            </h1>
            <p className="text-xl mb-8">one of apu apustaja best frens</p>
            <div className="space-x-4 ">
              <a
                href="https://dexscreener.com/solana/"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold lg:py-3 lg:px-6 py-2 px-3 rounded-full inline-flex items-center button"
                rel="noopener noreferrer"
              >
                <span>Buy Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 lg:ml-2 ml-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/BiZ5yY9dVajuwZynb4GQb43XaCUX7AnJA1HuhETBJrQi?t=1728670177075"
                className="bg-white hover:bg-slate-100 text-blue-500 font-bold lg:py-3 lg:px-6 py-2 px-3 rounded-full inline-flex button"
                rel="noopener noreferrer"
              >
                <span>Chart</span>
              </a>
            </div>
            <h1 className="text-xs md:text-xl font-bold lg:pt-16">CA:</h1>
          </div>
          <div className="lg:w-1/2  relative">
            <img src={LogoApu} alt="Aped Hero" className="rounded-lg " />
          </div>
        </div>
      </div>
      <div className="relative bottom-0 left-0 right-0 p-4 bg-white z-10 -rotate-2">
        <div className="flex justify-center lg:space-x-60 space-x-28">
          <a
            href="https://t.me/apugroot"
            className="text-white hover:scale-90 transition-transform duration-100"
            rel="noopener noreferrer"
          >
            <img
              src={Telegram}
              alt="Telegram"
              className="lg:h-14 lg:w-14 h-12 w-12"
            />
          </a>
          <a
            href="https://x.com/apugrootsolana"
            className="text-white hover:scale-90 transition-transform duration-100"
            rel="noopener noreferrer"
          >
            <img
              src={Twitter}
              alt="Twitter"
              className="lg:h-14 lg:w-14 h-12 w-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page1;
