import React from "react";
import LogoApu from "../assets/logo-2.png";

const Page2 = () => {
  return (
    <div
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${require("../assets/bg-2.jpg")})`,
      }}
    >
      <div className="container mx-auto px-4 pt-8 mb-4 lg:mb-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2  relative">
            <img src={LogoApu} alt="Aped Hero" />
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white text-[#43520d] font-extrabold rounded-lg md:-rotate-2 md:py-4 py-2 mb-4 border-solid border-8 border-t-2 border-e-2 border-[#b6c769]">
              <h1 className="text-4xl lg:text-5xl md:text-start text-center font-bold ml-4 ">
                #ABOUT APUGROOT
              </h1>
            </div>

            <div className="bg-white text-[#43520d] font-extrabold rounded-xl lg:text-3xl text-2xl md:h-auto h-64 py-4 px-1.5 border-solid border-8 border-s-2 border-e-4 border-[#b6c769] ">
              <span className=" border-solid border-2 border-r border-l border-t border-[#b6c769] ">
                Meet $APUGROOT one of apu apustaja best frens a sentient
                tree-like creature who communicates primarily through the phrase
                "I am Groot." living together with harmony in Apu Town
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bottom-0 left-0 right-0 py-4 bg-[#849b33] z-10 rotate-1 border-solid border-4 border-r border-l">
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
