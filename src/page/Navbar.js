import React, { useState, useEffect, useCallback } from "react"; // Corrected import
import { Link } from "react-scroll"; // Import from react-scroll

const Navbar = () => {
  const [buttonText, setButtonText] = useState("Generate NFT");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => {
    setButtonText("Coming Soon");

    setTimeout(() => {
      setButtonText("Generate NFT");
    }, 800);
  };

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 text-white z-50 py-2 md:px-32 px-2 bg-black bg-opacity-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="page1"
          smooth={true}
          duration={500}
          className="text-xl md:text-2xl font-bold cursor-pointer"
        >
          <span>$APUGROOT</span>
        </Link>
        <button
          className="inline-flex items-center bg-[#849b33] hover:bg-[#5b6728] text-white font-bold rounded-lg button h-8 w-24 lg:h-12 lg:w-28 justify-center"
          onClick={handleClick}
        >
          <span className="flex items-center ">{buttonText}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
