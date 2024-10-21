import React from "react";

const Page3 = () => {
  return (
    <div className=" lg:py-10 lg:px-10 px-2 py-4">
      <div className="relative w-full pb-[200%] md:pb-[50%]">
        <iframe
          src="https://dexscreener.com/solana/26s3UGB9hund1qspApy1zYgCritxAooGg7o63BMn89Yq?embed=1&theme=dark&trades=0"
          className="absolute top-0 left-0 w-full h-full border-0"
          title="Dex Screener"
        ></iframe>
      </div>
    </div>
  );
};

export default Page3;
