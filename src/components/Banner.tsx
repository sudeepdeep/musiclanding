import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { djomusic, mainLogo } from "../utils/constants";
// import joegif from "../assets/joekerry.gif";
import Navbar from "./Navbar";

function Banner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Animated Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="relative w-full h-full">
          {/* Main GIF Background */}
          {/* <img
            src={joegif}
            className="w-full h-full object-cover"
            alt="DJO Performance"
          /> */}

          {/* Dynamic Overlay with Mouse Interaction */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(0,0,0,0.3) 0%, 
                rgba(0,0,0,0.7) 40%, 
                rgba(0,0,0,0.9) 100%)`,
            }}
          />

          {/* Additional Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
        </div>
      </motion.div>

      {/* Navbar */}
      <div className="absolute z-50 w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-40 flex flex-col items-start justify-center min-h-screen px-8 md:px-16 lg:px-24"
        style={{ opacity }}
      >
        <div className="max-w-7xl w-full">
          {/* Artist Name/Logo */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block mb-8"
          >
            <img
              src={mainLogo}
              alt="DJO"
              className="w-72 md:w-96 lg:w-[250px] h-auto filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-12 max-w-2xl"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                BACK ON YOU
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              World Tour 2025 • New Album "The Crux" Available Now
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(29, 185, 84, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-green-400 hover:to-green-500 shadow-lg"
            >
              Listen Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
            >
              Tour Dates
            </motion.button>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-wrap gap-8 text-white/80"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                1M+
              </div>
              <div className="text-sm uppercase tracking-wider">
                Monthly Listeners
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                50+
              </div>
              <div className="text-sm uppercase tracking-wider">
                Tour Cities
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                #1
              </div>
              <div className="text-sm uppercase tracking-wider">
                Indie Charts
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/2 right-8 md:right-16 z-30"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-2 h-16 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-sm uppercase tracking-wider mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default Banner;
