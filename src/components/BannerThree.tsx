import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mainLogo } from "../utils/constants";
import Navbar from "./Navbar";

function BannerThree() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 40%, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 30%, 
              transparent 70%)`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Moving Light Beams */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
            style={{
              left: `${20 + i * 30}%`,
            }}
            animate={{
              x: ["-100vw", "100vw"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}
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
        <div className="max-w-5xl w-full text-center">
          {/* Cinematic Title Sequence */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 2 }}
            className="mb-16"
          >
            {/* Artist Logo with Cinematic Entrance */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 2,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="mb-12"
            >
              <img
                src={mainLogo}
                alt="DJO"
                className="w-72 md:w-96 h-auto mx-auto filter drop-shadow-2xl"
              />
            </motion.div>

            {/* Main Title with Typewriter Effect */}
            <motion.div className="mb-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-7xl md:text-9xl font-black text-white leading-none tracking-wider mb-4"
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2 }}
                  className="inline-block"
                >
                  B
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.1 }}
                  className="inline-block"
                >
                  A
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="inline-block"
                >
                  C
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.3 }}
                  className="inline-block"
                >
                  K
                </motion.span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
                className="text-6xl md:text-8xl font-black leading-none tracking-wider"
              >
                <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                  ON YOU
                </span>
              </motion.h2>
            </motion.div>

            {/* Subtitle with Fade In */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="mb-12"
            >
              <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
                The most anticipated world tour of 2025
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, delay: 4 }}
                className="h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-6"
              />
            </motion.div>
          </motion.div>

          {/* Tour Information Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl md:text-5xl font-black text-red-400 mb-4"
              >
                50+
              </motion.div>
              <div className="text-lg text-gray-300 uppercase tracking-wider">
                Cities Worldwide
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="text-4xl md:text-5xl font-black text-yellow-400 mb-4"
              >
                2025
              </motion.div>
              <div className="text-lg text-gray-300 uppercase tracking-wider">
                World Tour
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="text-4xl md:text-5xl font-black text-green-400 mb-4"
              >
                LIVE
              </motion.div>
              <div className="text-lg text-gray-300 uppercase tracking-wider">
                Experience
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
                backgroundColor: "rgba(239, 68, 68, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-black rounded-full text-xl overflow-hidden transition-all duration-300 shadow-2xl"
            >
              <span className="relative z-10 uppercase tracking-wider">
                Get Tickets
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(34, 197, 94, 1)",
                color: "rgba(34, 197, 94, 1)",
              }}
              whileTap={{ scale: 0.9 }}
              className="px-12 py-5 border-3 border-white text-white font-black rounded-full text-xl transition-all duration-300 backdrop-blur-sm uppercase tracking-wider"
            >
              Stream Album
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Film Grain Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}

export default BannerThree;
