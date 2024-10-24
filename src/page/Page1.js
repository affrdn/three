import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import LogoApu from "../assets/logo-1.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

const Page1 = () => {
  const [copied, setCopied] = useState(false);
  const ContractAddress = "TBA";
  const [timeRemaining, setTimeRemaining] = useState("00:00:00");

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 700);
  };

  // Countdown Timer Logic
  useEffect(() => {
    const targetDate = new Date("2024-10-25T23:00:00");
    const timerId = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining(
          `${String(totalHours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
          )}:${String(seconds).padStart(2, "0")}`
        );
      } else {
        setTimeRemaining("00:00:00");
        clearInterval(timerId);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      id="page1"
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${require("../assets/bg-1.jpg")})`,
      }}
    >
      <Analytics />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-25 z-10" />

      <div className="mx-auto pt-28 lg:pt-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center mx-auto container px-4">
          <div className="lg:w-1/2 text-center lg:ml-7 lg:pt-16 pt-6">
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-bold">
              $APUGROOT
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl lg:mb-8 mb-4 font-extrabold">
              one of apu apustaja best frens
            </p>
            <div className="lg:space-x-10 space-x-6 pt-2">
              <a
                href={`https://dexscreener.com/solana/${ContractAddress}`}
                className="bg-[#849b33] hover:bg-[#5b6728] md:text-2xl lg:text-3xl text-white font-extrabold rounded-full inline-flex items-center justify-center button h-8 w-24 md:h-12 md:w-44 border-2 border-white"
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
                className="bg-white hover:bg-slate-100 cursor-pointer text-[#43520d] md:text-2xl lg:text-3xl font-extrabold rounded-full inline-flex items-center justify-center button h-8 w-20 md:h-12 md:w-32 border-2 border-[#849b33]"
              >
                <span>Chart</span>
              </Link>
            </div>
            <h1
              className={`${
                timeRemaining === "00:00:00"
                  ? "text-xs md:text-2xl px-4"
                  : "text-3xl"
              } flex button font-bold lg:mt-12 mt-4 py-1  border-solid border-2 bg-[#849b33] hover:bg-[#5b6728] rounded-full justify-center items-center`}
            >
              {copied ? (
                <span>Copied</span>
              ) : (
                <>
                  <span className="lg:mr-4 mr-2">
                    {timeRemaining === "00:00:00"
                      ? `CA: ${ContractAddress}`
                      : timeRemaining}
                  </span>
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
        <div className="bg-[#849b33] relative bottom-0 left-0 right-0 p-4 z-10 md:-rotate-1 border-solid border-4 border-r border-l border-t">
          <div className="flex justify-center lg:space-x-60 space-x-28">
            <a
              href="https://t.me/ApuGrootsolana"
              className="text-white hover:scale-90 transition-transform duration-100"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={Telegram}
                alt="Telegram"
                className="lg:h-14 lg:w-14 h-12 w-12"
              />
            </a>
            <a
              href="https://x.com/apugrootsol"
              className="text-white hover:scale-90 transition-transform duration-100"
              rel="noopener noreferrer"
              target="_blank"
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
    </div>
  );
};

export default Page1;
