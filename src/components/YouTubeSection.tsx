import React, { useEffect, useRef, useState } from "react";
import { AppleMusicEmbed, DJOSpotify, YouTubeChannelEmbed } from "./MusicPage";
import {
  AppleMusicIcon,
  SpotifyIcon,
  YoutubeIcon,
  YoutubeMusicIcon,
} from "../assets/Icons";
import { motion, useMotionValue, animate } from "framer-motion";

function YouTubeSection() {
  // Actual DJO video IDs and titles
  const videos = [
    {
      id: "ro8-I3DoU5w",
      title: "Djo - Another Bite Tour (Part Four)",
      description: "Official Music Video",
    },
    {
      id: "zxkVkm3VHxk",
      title: "Djo - Mr. Mountebank",
      description: "Official Music Video",
    },
    {
      id: "MeHj7J8EAGA",
      title: "Djo - Grime Of The World",
      description: "Official Music Video",
    },
  ];

  return (
    <section
      id="youtube"
      className="relative bg-black py-20 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-50"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            LATEST VIDEOS
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the music through exclusive content and live performances
          </p>
        </div>
        {/* YouTube Videos Grid */}

        {/* YouTube Channel Link */}
        {/* <div className="text-center">
          <a
            href="http://youtube.com/@djomusic887/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch More on YouTube
          </a>
        </div> */}

        <FramerCarousel videos={videos} />
        <div className="flex md:flex-row flex-col items-center gap-[20px] mt-14 justify-between">
          <div>
            <div className="flex gap-5 items-center mb-6">
              <p className="text-2xl md:text-4xl font-black text-white">
                FOLLOW ON{" "}
              </p>

              <span>
                <SpotifyIcon h={10} w={10} />
              </span>
            </div>
            <DJOSpotify artist={"djo"} />
          </div>
          <div>
            <div className="flex gap-5 items-center mb-6">
              <p className="text-2xl md:text-4xl font-black text-white">
                FOLLOW ON{" "}
              </p>

              <span>
                <AppleMusicIcon h={10} w={10} />
              </span>
            </div>
            <AppleMusicEmbed link="https://music.apple.com/us/album/the-crux-deluxe/1837525420" />
          </div>

          <div>
            <div className="flex gap-5 items-center mb-6">
              <p className="text-2xl md:text-4xl font-black text-white">
                FOLLOW ON{" "}
              </p>

              <span>
                <YoutubeIcon h={10} w={10} />
              </span>
            </div>
            <YouTubeChannelEmbed
              type="playlist"
              id="PLd8W-283kUR8cyVH4OK2iA-hH3qNyDm5M"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FramerCarousel({ videos }: any) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className="w-full lg:p-10 sm:p-4 p-2">
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden rounded-lg" ref={containerRef}>
          <motion.div className="flex" style={{ x }}>
            {videos.map((item: any, index: any) => (
              <div key={index} className="shrink-0 w-full h-[400px]">
                <iframe
                  src={`https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "bg-slate-300 hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === videos.length - 1}
            onClick={() => setIndex((i) => Math.min(videos.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === videos.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "bg-slate-300 hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_: any, i: any) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTubeSection;
