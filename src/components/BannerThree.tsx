import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mainLogo } from "../utils/constants";
import Navbar from "./Navbar";
import "./Home.css";

function BannerThree() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  function handleClickonCD() {
    window.location.href = "/music/end-of-beginning";
  }

  return (
    <header className="relative h-screen flex items-center justify-center pt-20 overflow-hidden bg-charcoal">
      <div className="absolute z-50 w-full top-0">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          className="w-full h-full object-cover"
          alt="Moody stage lighting in deep purple and blue hues"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFqBpaLmxAHwd3tAMSnrP3wD6FI3NTZ2sBUGpR0GgWDCfTddxqOlg-A4c0UP1y5f_RBdq1ogVHT6CnFJ7Ld9cnTYPgUXeF1GzHQVX-vm-k-c2xNDXfYXXBjZpnPbgwPOUpmKVUyXpTMQwXVt2UUBbHUh6gP_3WYDUJC3L4R-DTQ5A89TnU4v9DE71oFPuFEsZY2tWZ8nVQ9YpoyEMLGugChytM_ArjZm3qHiSFaahNNC6mYLwS0CGFIT3w_01RUejiWtOr1uq03nZo"
        />
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-8xl md:text-[12rem] font-extrabold tracking-tighter mb-4 leading-none uppercase">
          BACK ON{" "}
          <span
            className="text-transparent"
            style={
              {
                WebkitTextStroke: "3px white",
              } as React.CSSProperties
            }
          >
            YOU
          </span>
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-[0.3em] uppercase opacity-80 max-w-3xl mx-auto">
          Experience the new single from <br />
          The Crux album
        </p>
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <a
            className="px-10 py-4 bg-primary text-white font-bold  hover:scale-105 transition-transform"
            href="#releases"
            onClick={handleClickonCD}
          >
            LATEST ALBUM
          </a>
          <a
            className="px-10 py-4 border border-white/30 glass font-bold  hover:bg-white/10 transition-colors"
            href="#tour"
          >
            VIEW TOUR DATES
          </a>
        </div>
      </div>
    </header>
  );
}

export default BannerThree;
