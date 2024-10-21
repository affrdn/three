import React from "react";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import LogoApu from "../assets/logo-1.png";

const Page1 = () => {
  return (
    <div className="relative  text-white ">
      <div className="container mx-auto px-4 pt-28 lg:pt-20 ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:space-y-8 lg:ml-7 lg:pt-16 pt-6">
            <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-bold mb-2">
              $APUGROOT
            </h1>
            <p className="md:text-2xl lg:text-4xl lg:mb-8 mb-4">
              one of apu apustaja best frens
            </p>
            <div className="space-x-5 ">
              {/* lg:py-3 lg:px-6 py-2 px-3 */}
              <a
                href="https://dexscreener.com/solana/"
                className="bg-[#849b33] hover:bg-[#5b6728] text-white font-bold rounded-full inline-flex items-center justify-center button h-8 w-24 lg:h-12 lg:w-28"
                rel="noopener noreferrer"
                target="_blank"
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
                href="https://www.dextools.io/"
                className="bg-white hover:bg-slate-100 text-blue-500 font-bold rounded-full inline-flex items-center justify-center button h-8 w-20 lg:h-12 lg:w-28"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Chart</span>
              </a>
            </div>
            <h1 className="text-xs md:text-xl font-bold lg:pt-10 pt-6">CA: </h1>
          </div>
          <div className="lg:w-1/2  relative">
            <img src={LogoApu} alt="Aped Hero" className="rounded-lg " />
          </div>
        </div>
      </div>
      <div className="custom-pattern-1 relative bottom-0 left-0 right-0 p-4 z-10 -rotate-1">
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
