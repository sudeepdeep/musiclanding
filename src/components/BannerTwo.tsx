import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { mainLogo } from "../utils/constants";
import Navbar from "./Navbar";
import vintageCd from "../assets/vintage-cd.png";
import cdBanner from "../assets/crux-banner.png";
import { MusicIcon, SpotifyIcon } from "../assets/Icons";

function BannerTwo() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  // const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const rotateX = useTransform(scrollY, [0, 300], [0, 2]);
  const rotateY = useTransform(scrollY, [0, 300], [0, 2]);

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

  function handleClickonAlbum() {
    window.location.href = "/album/the-crux";
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Premium Dynamic Background with Sophisticated Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Premium Blue-Gold Gradient Blur - Large and Dominant */}
        <motion.div
          className="absolute -top-24 -left-24 w-[1200px] h-[1200px] rounded-full blur-[100px]"
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.35) 0%, rgba(99, 102, 241, 0.25) 35%, rgba(234, 179, 8, 0.15) 60%, transparent 80%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            rotate: [0, 45, 90, 135, 180],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Emerald-Cyan Blur - Right Side */}
        <motion.div
          className="absolute top-1/4 -right-32 w-[900px] h-[900px] rounded-full blur-[80px]"
          style={{
            background: `radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.25) 0%, rgba(34, 211, 238, 0.2) 40%, rgba(99, 102, 241, 0.1) 60%, transparent 80%)`,
          }}
          animate={{
            scale: [1.1, 1, 1.2, 1.1],
            x: [0, -80, 40, 0],
            y: [0, 60, -30, 0],
            rotate: [180, 135, 90, 45, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Deep Purple Accent Blur - Bottom Left */}
        <motion.div
          className="absolute -bottom-32 left-1/4 w-[800px] h-[800px] rounded-full blur-[70px]"
          style={{
            background: `radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.25) 0%, rgba(99, 102, 241, 0.2) 35%, rgba(59, 130, 246, 0.1) 55%, transparent 75%)`,
          }}
          animate={{
            scale: [1, 1.2, 0.95, 1],
            x: [0, -100, 60, 0],
            y: [0, -50, 25, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Warm Amber Accent Blur - Center Right */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-[700px] h-[700px] rounded-full blur-[60px]"
          style={{
            background: `radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.15) 40%, rgba(16, 185, 129, 0.1) 60%, transparent 80%)`,
          }}
          animate={{
            scale: [1.05, 1.2, 1, 1.05],
            x: [0, 50, -60, 0],
            y: [0, -70, 40, 0],
            rotate: [0, 60, 120, 180, 240, 300, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle Top Accent Blur */}
        <motion.div
          className="absolute top-16 right-1/4 w-[500px] h-[500px] rounded-full blur-[50px]"
          style={{
            background: `radial-gradient(circle, rgba(147, 197, 253, 0.25) 0%, rgba(96, 165, 250, 0.15) 50%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Premium Particles Effect */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-blue-400/60 to-purple-400/60 rounded-full blur-sm shadow-lg"
            style={{
              left: `${(i * 18) % 100}%`,
              top: `${(i * 12) % 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.sin(i) * 80, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Premium Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />

        {/* Subtle Noise Texture Overlay for Premium Feel */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle Grid Lines for Professional Aesthetic */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Navbar */}
      <div className="absolute z-50 w-full">
        <Navbar />
      </div>

      {/* Main Content with Premium Parallax Effect */}
      <motion.div
        className="relative z-40 flex items-center min-h-screen px-8 md:px-16 lg:px-24"
        style={{ opacity }}
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Logo */}

            {/* Main Text with Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="font-black text-white leading-tight">
                <motion.span
                  className="text-6xl md:text-8xl block uppercase relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  BACK ON YOU
                  {/* Glowing text effect */}
                  {/* <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/50 to-cyan-500/50 -z-10" /> */}
                </motion.span>
                <motion.span
                  className="text-2xl block uppercase mt-2 text-blue-300/90 tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Out now
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-lg md:text-xl text-gray-300/80 max-w-lg leading-relaxed"
              >
                Experience the new single from
                <br /> The Crux album
              </motion.p>
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

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-4 max-w-lg"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-md rounded-xl p-4 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-blue-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  #1
                </motion.div>
                <div className="text-xs flex items-center gap-2 whitespace-nowrap text-gray-400 uppercase tracking-wide">
                  <span>Trending on </span>
                  <SpotifyIcon />
                </div>
              </div>
              {/* <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-md rounded-xl p-4 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-cyan-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  10M+
                </motion.div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">
                  Streams
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 backdrop-blur-md rounded-xl p-4 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300">
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-indigo-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  2026
                </motion.div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">
                  Release
                </div>
              </div> */}

              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <img
                  src={mainLogo}
                  alt="DJO"
                  className="w-24 md:w-24 h-auto filter drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Action Buttons with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
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
            className="relative flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={handleClickonAlbum}
              onHoverStart={() => {
                // Reset animation by removing and re-adding the class
                const img = document.querySelector(".imageanime");
                if (img) {
                  img.classList.remove("imageanime");
                  void (img as HTMLElement).offsetWidth; // Trigger reflow
                  img.classList.add("imageanime");
                }
              }}
            >
              {/* Image with animation that pauses on hover */}
              <img
                className="imageanime group-hover:[animation-play-state:paused] w-96 h-96 rounded-2xl shadow-2xl transition-all duration-300"
                src="https://i.scdn.co/image/ab67616d0000b273f4277fb50a1306e63cef99b4"
                alt="spotify-banner"
              />

              {/* Hover overlay - covers entire image area */}
              <div className="absolute inset-0 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                {/* Text */}
                <div className="text-center transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-wider">
                    VIEW ALBUM
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">
                    Click to explore
                  </p>
                </div>

                {/* Decorative line */}
                {/* <div className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-4 w-0 group-hover:w-4/5 transition-all duration-500" /> */}
              </div>

              {/* Glow effect on hover */}
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" /> */}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/50 group cursor-pointer"
          onClick={() => {
            // Smooth scroll to next section
            const nextSection = document.querySelector('[data-section="next"]');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-xs uppercase tracking-widest mb-3 font-light text-blue-300/70 group-hover:text-blue-300 transition-colors duration-300">
            Scroll Down
          </span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </motion.div> */}
    </div>
  );
}

export default BannerTwo;
