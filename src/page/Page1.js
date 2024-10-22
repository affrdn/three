import React, { useState } from "react";
import { Link } from "react-scroll"; // Import from react-scroll
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import LogoApu from "../assets/logo-1.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";

const Page1 = () => {
  const [copied, setCopied] = useState(false);
  const ContractAddress = "TBA"; // Set contract address

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Change back after 2 seconds
  };

  return (
    <div
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${require("../assets/background-1.png")})`,
      }}
    >
      <div className="container mx-auto px-4 pt-28 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:space-y-8 lg:ml-7 lg:pt-16 pt-6">
            <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-bold mb-2">
              $APUGROOT
            </h1>
            <p className="md:text-3xl lg:text-4xl lg:mb-8 mb-4 font-extrabold">
              one of apu apustaja best frens
            </p>
            <div className="lg:space-x-10 space-x-6">
              <a
                href="https://dexscreener.com/solana/"
                className="bg-[#849b33] hover:bg-[#5b6728] md:text-2xl lg:text-3xl text-white font-extrabold rounded-full inline-flex items-center justify-center button h-8 w-24 md:h-12 md:w-44"
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

              <Link
                to="page3"
                smooth={true}
                duration={500}
                className="bg-white hover:bg-slate-100 text-[#43520d] md:text-2xl lg:text-3xl font-extrabold rounded-full inline-flex items-center justify-center button h-8 w-20 md:h-12 md:w-32"
              >
                <span>Chart</span>
              </Link>
            </div>
            <h1 className="flex text-xs md:text-2xl font-bold lg:mt-12 mt-4 py-1 px-4 border-solid border-2 bg-[#849b33] hover:bg-[#5b6728] rounded-full justify-center items-center">
              {copied ? (
                <span>Copied</span>
              ) : (
                <>
                  <span className="lg:mr-4 mr-2">CA: {ContractAddress}</span>
                  {ContractAddress !== "TBA" && (
                    <CopyToClipboard text={ContractAddress} onCopy={handleCopy}>
                      <span className="cursor-pointer">
                        <FaRegCopy className="lg:h-6 lg:w-6 md:h-4 md:w-4 h-3 w-3" />
                      </span>
                    </CopyToClipboard>
                  )}
                </>
              )}
            </h1>
          </div>
          <div className="lg:w-1/2 relative">
            <img src={LogoApu} alt="Aped Hero" className="rounded-lg" />
          </div>
        </div>
      </div>
      <div className="bg-[#849b33] relative bottom-0 left-0 right-0 p-4 z-10 md:-rotate-1 border-solid border-4 border-r border-l border-t">
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
