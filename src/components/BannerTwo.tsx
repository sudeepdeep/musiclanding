// import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mainLogo } from "../utils/constants";
import Navbar from "./Navbar";
import vintageCd from "../assets/vintage-cd.png";
import cdBanner from "../assets/crux-banner.png";

function BannerTwo() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  // const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({
  //       x: (e.clientX / window.innerWidth) * 100,
  //       y: (e.clientY / window.innerHeight) * 100,
  //     });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  function handleClickonCD() {
    window.location.href = "/music/end-of-beginning";
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Dynamic Background with Animated Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[900px] h-[900px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        /> */}

        {/* <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 40%, 
              transparent 100%)`,
          }}
        /> */}
      </div>

      {/* Navbar */}
      <div className="absolute z-50 w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-40 flex items-center min-h-screen px-8 md:px-16 lg:px-24"
        style={{ opacity }}
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Logo */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src={mainLogo}
                alt="DJO"
                className="w-48 md:w-64 h-auto filter drop-shadow-2xl"
              />
            </motion.div>

            {/* Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className=" font-black text-white leading-tight">
                <span className="text-5xl md:text-7xl block uppercase">
                  BACK ON YOU
                </span>
                <span className="text-2xl block uppercase">Out now</span>
                {/* <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  ON YOU
                </span> */}
              </h1>
              {/* <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed">
                Experience the electrifying world tour that's redefining live
                music
              </p> */}
            </motion.div>

            {/* Tour Info Cards */}
            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="grid grid-cols-2 gap-4 max-w-md"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-400">Cities</div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">2025</div>
                <div className="text-sm text-gray-400">World Tour</div>
              </div>
            </motion.div> */}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleClickonCD}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:opacity-80"
                style={{
                  backgroundColor: "rgba(59, 130, 246)",
                }}
              >
                Listen Now
              </motion.button>
              <motion.button
                onClick={() => (window.location.href = "#tour")}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
              >
                Tour Dates
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            {/* Central Circle */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Rotating Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-0"
                  style={{
                    borderColor:
                      i === 0
                        ? "rgba(34, 197, 94, 0.6)"
                        : i === 1
                          ? "rgba(59, 130, 246, 0.6)"
                          : "rgba(168, 85, 247, 0.6)",
                    transform: `scale(${1 - i * 0.2})`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                  }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Center Content - Vintage CD */}
              <div
                onClick={handleClickonCD}
                className="cursor-pointer absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Rotating Vintage CD */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-80 h-80 md:w-96 md:h-96"
                  >
                    <img
                      src={vintageCd}
                      alt="Vintage CD"
                      className="w-full h-full object-cover rounded-full shadow-2xl"
                    />
                  </motion.div>

                  <div className="absolute mt-2 inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg"
                      >
                        <img
                          src={cdBanner}
                          alt="cd Banner"
                          className="w-[140px] h-full object-cover rounded-full shadow-2xl"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Center Text Overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg"
                      >
                        ♪
                      </motion.div>
                      <div className="text-sm md:text-lg text-gray-200 font-bold drop-shadow-lg">
                        THE CRUX
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Floating Particles */}
              {/* {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white/60 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: [0, Math.cos((i * 45 * Math.PI) / 180) * 150],
                    y: [0, Math.sin((i * 45 * Math.PI) / 180) * 150],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))} */}
            </div>
          </motion.div>
        </div>
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
          <span className="text-sm uppercase tracking-wider mb-2">Explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BannerTwo;
