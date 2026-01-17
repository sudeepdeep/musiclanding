import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mainLogo } from "../utils/constants";
import Navbar from "./Navbar";

function BannerOne() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-white/20"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute z-50 w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-40 flex flex-col items-center justify-center min-h-screen px-8"
        style={{ opacity, y }}
      >
        <div className="max-w-6xl w-full text-center">
          {/* Artist Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
            className="mb-12"
          >
            <img
              src={mainLogo}
              alt="DJO"
              className="w-64 md:w-80 lg:w-96 h-auto mx-auto filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Main Typography */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
              <span className="block">BACK</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                ON YOU
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariants}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              World Tour 2025 • The Crux Album • Live Performances Across 50+
              Cities
            </p>
          </motion.div>

          {/* Live Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textVariants}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  LIVE
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Currently Performing
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Local Time
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  2025
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Tour Year
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-full text-lg overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">STREAM NOW</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border-2 border-white text-white font-bold rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
            >
              VIEW TOUR
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

export default BannerOne;
