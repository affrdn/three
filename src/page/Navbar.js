import React, { useState } from "react";
// import { Menu } from "lucide-react";
// import { SiReadthedocs } from "react-icons/si";

const Navbar = () => {
  const handleReload = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const [buttonText, setButtonText] = useState("Generate NFT");

  const handleClick = () => {
    setButtonText("Coming Soon");

    // Mengubah kembali ke "Generate NFT" setelah 1 detik
    setTimeout(() => {
      setButtonText("Generate NFT");
    }, 700);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-50 py-2 md:px-32 px-2">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={handleReload}
          className="text-xl md:text-2xl font-bold"
        >
          $APUGROOT
        </button>
        {/* <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#howtobuy" className="hover:text-gray-300">
            How to buy
          </a>
          <a href="#tokenomics" className="hover:text-gray-300">
            Tokenomics
          </a>
        </nav>
        <div className="md:hidden">
          <Menu className="h-6 w-6" />
        </div> */}
        <button
          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg button md:py-2 md:px-5 py-2 px-3 justify-center"
          onClick={handleClick}
        >
          <span className="flex items-center">{buttonText}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
