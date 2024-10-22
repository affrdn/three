import React from "react";

const Page3 = () => {
  return (
    <div
      id="page3"
      className="lg:py-10 lg:px-10 px-2 py-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${require("../assets/bg-3.jpg")})`,
      }}
    >
      <div className="relative w-full pb-[180%] md:pb-[50%]">
        <iframe
          src="https://dexscreener.com/solana?embed=1&theme=dark&trades=0"
          className="absolute top-0 left-0 bottom-0 w-full h-full border-0"
          title="Dex Screener"
          aria-label="Dex Screener" // Accessibility improvement
        ></iframe>
      </div>
    </div>
  );
};

export default Page3;
