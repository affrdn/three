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
    }, 800);
  };

  return (
    <header className="fixed top-0 left-0 right-0 text-white z-50 py-2 md:px-32 px-2 bg-black bg-opacity-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={handleReload}
          className="text-xl md:text-2xl font-bold"
        >
          $APUGROOT
        </button>
        <button
          className="inline-flex items-center bg-[#849b33] hover:bg-[#5b6728] text-white font-bold rounded-lg button h-8 w-24 lg:h-12 lg:w-28 justify-center"
          onClick={handleClick}
        >
          <span className="flex items-center">{buttonText}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
