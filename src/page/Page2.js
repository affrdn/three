import React from "react";
import LogoApu from "../assets/logo-2.png";

const Page2 = () => {
  return (
    <div
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${require("../assets/background-2.png")})`,
      }}
    >
      <div className="container mx-auto px-4 pt-8 mb-4 lg:mb-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2  relative">
            <img src={LogoApu} alt="Aped Hero" />
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white text-[#43520d] font-extrabold rounded-lg -rotate-2 py-4 mb-6">
              <h1 className="text-4xl lg:text-5xl text-start font-bold ml-4">
                #ABOUT APUGROOT
              </h1>
            </div>

            <div className="bg-white text-[#43520d] font-extrabold rounded-xl pb-12 lg:text-3xl text-2xl h-1/4 py-4 px-1.5">
              <span>
                Meet $APUGROOT one of apu apustaja best frens a sentient
                tree-like creature who communicates primarily through the phrase
                "I am Groot." living together with harmony in Apu Town
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bottom-0 left-0 right-0 py-2 bg-[#849b33] z-10 md:rotate-1 border-solid border-4 border-r border-l border-[#b6c769] ">
        <div className="overflow-hidden text-black  whitespace-nowrap text-3xl lg:text-5xl w-full">
          <div className="flex animate-scroll">
            $APUGROOT $APUGROOT $APUGROOT $APUGROOT $APUGROOT $APUGROOT
            $APUGROOT $APUGROOT $APUGROOT $APUGROOT $APUGROOT $APUGROOT
            $APUGROOT $APUGROOT $APUGROOT $APUGROOT $APUGROOT $APUGROOT
            $APUGROOT $APUGROOT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
