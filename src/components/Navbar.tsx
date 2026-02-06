import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./Home.css";

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHam, setShowHam] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  function handleShowHam(){
    setShowHam(!showHam);
  }
  return (
    <>
      <div
        className={`fixed ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } w-[100vw] h-[100px] z-10 bg-gradient-to-b from-black to-transparent`}
      ></div>

      <div
        className={`fixed flex z-40 font-bold w-[100vw] h-[100px] justify-between items-center px-8 md:px-16 lg:px-24 transition-transform ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Left spacer */}
        {/* <div className="flex-1"></div> */}

        <div className="flex flex-1  md:justify-start justify-center">
          <div className="flex gap-3">
            <a
              href="https://instagram.com/djomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <img
                className="w-12"
                src={
                  "https://store.djomusic.com/cdn/shop/files/CruxDeluxe_LOGO_410x.png?v=1757606871"
                }
                alt="djo-music"
              />
            </a>
          </div>
        </div>

        {/* Center navigation links */}
        <div className="hidden md:flex gap-[50px] text-[15px]">
           <a href="#news" className="nav-link">
            NEWS
          </a>
          <a href="#tour" className="nav-link">
            TOUR
          </a>
          <a href="#store" className="nav-link">
            STORE
          </a>
          <a href="#music" className="nav-link">
            MUSIC
          </a>
          <a href="#mail" className="nav-link">
            MAILING LIST
          </a>
        </div>
              

        {/* apply transition for X and ham */}
        <div className="flex justify-end md:hidden">
  <AnimatePresence mode="wait">
    {showHam ? (
      <motion.div
        key="menu-icon"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.3 }}
      >
        <MenuIcon 
          className="w-8 h-8 cursor-pointer" 
          onClick={() => handleShowHam()} 
        />
      </motion.div>
    ) : (
      <>
        <motion.div
          key="close-icon"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="absolute top-6 right-6 z-50"
        >
          <X 
            className="w-8 h-8 cursor-pointer text-white" 
            onClick={() => handleShowHam()} 
          />
        </motion.div>

        <motion.div
          key="menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-md z-40"
        >
          <motion.div 
            className="flex flex-col items-center mt-[120px] gap-10 h-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <motion.img
              src="https://store.djomusic.com/cdn/shop/files/CruxDeluxe_LOGO_410x.png?v=1757606871"
              alt="djo-music"
              className="w-24 mb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
            
            {['NEWS', 'TOUR', 'STORE', 'MUSIC', 'MAILING LIST'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="nav-link text-2xl text-white hover:text-gray-300 transition-colors"
                onClick={() => handleShowHam()}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.3 + (index * 0.1), 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
</div>

        {/* Right social media icons */}
        <div className="hidden flex-1 md:flex justify-end">
          <div className="flex gap-3">
            <a
              href="https://instagram.com/djomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://x.com/djomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-white transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="http://youtube.com/@djomusic887"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a
              href="https://open.spotify.com/artist/djo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Spotify"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
