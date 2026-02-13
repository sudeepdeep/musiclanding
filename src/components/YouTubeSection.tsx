/* eslint-disable no-lone-blocks */
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AmazonMusicIcon, AppleMusicIcon, SoundCloudIcon, SpotifyIcon, YoutubeIcon } from "../assets/Icons";
import JoeGif from "../assets/joekerry.gif";

function Gallery({ items, setIndex }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
      {items.map((item: any, i: any) => (
        <motion.div
          className="relative h-[160px] rounded-lg overflow-hidden cursor-pointer group"
          key={item.id}
          onClick={() => setIndex(i)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
          />
          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-xl"
            >
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xs font-semibold line-clamp-2">
              {item.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SingleImage({ item, onClick }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClick}
    >
      <motion.div
        layoutId={item.id}
        className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1`}
          title={item.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
        <button
          onClick={onClick}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

function YouTubeSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Actual DJO video IDs and titles
  const videos = [
    {
      id: "ro8-I3DoU5w",
      title: "Djo - Another Bite Tour (Part Four)",
      description: "Official Music Video",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4cw5SRPG5We_z_I7bhxW56Jbyf693yhjgQ&s",
    },
    {
      id: "zxkVkm3VHxk",
      title: "Djo - Mr. Mountebank",
      description: "Official Music Video",
      thumbnail:
        "https://i.ytimg.com/vi/zxkVkm3VHxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOdnhBvrzePV44gTkL71nr2r5ydw",
    },
    {
      id: "ZqEOGg6WxgI",
      title: "Djo - Back On You (Official Visualizer)",
      description: "Official Music Video",
      thumbnail: "https://i.ytimg.com/vi/ZqEOGg6WxgI/maxresdefault.jpg",
    },
    {
      id: "jy2AZRsnGqE",
      title: "Djo - Crux (Official Visualizer)",
      description: "Official Music Video",
      thumbnail:
        "https://i.ytimg.com/vi/jy2AZRsnGqE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuV4wAPHTIEhXdp6tZZnRnMLIWAA",
    },
  ];

  return (
    <>
    <section
      id="music"
      className="relative bg-black py-20 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-[26%] right-[6%] w-[500px] h-[500px] rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">
            LATEST{" "}
            <span
              className="text-transparent"
              style={
                {
                  WebkitTextStroke: "3px white",
                } as React.CSSProperties
              }
            >
              VIDEOS
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the music through exclusive content and live performances
          </p>
        </div>
        {/* YouTube Videos Grid */}
        <Gallery items={videos} setIndex={setSelectedIndex} />

        <AnimatePresence>
          {selectedIndex !== null && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                key="overlay"
                className="fixed inset-0 bg-black z-40"
                onClick={() => setSelectedIndex(null)}
              />

              {/* Expanded Video */}
              <SingleImage
                key="image"
                item={videos[selectedIndex]}
                onClick={() => setSelectedIndex(null)}
              />
            </>
          )}
        </AnimatePresence>

        <div className="text-center mt-12">
          <button className="mx-auto px-12 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 flex gap-2 items-center">
            View on  <span className="hidden md:block">YouTube</span> <YoutubeIcon />
          </button>
        </div>


        {/* FOLLOW ON Section with Enhanced Layout */}
        {/* <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-6xl md:text-8xl font-black text-white mb-4">
              STREAM{" "}
              <span
                className="text-transparent"
                style={
                  {
                    WebkitTextStroke: "3px white",
                  } as React.CSSProperties
                }
              >
                NOW
              </span>
            </h3>
            <p className="text-lg md:text-xl text-gray-400">
              Listen on your favorite platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-md rounded-xl p-4 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                  <SpotifyIcon h={6} w={6} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white">
                    SPOTIFY
                  </h4>
                  <p className="text-xs text-gray-400">Stream on Spotify</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <DJOSpotify artist={"djo"} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-pink-500/10 to-red-600/5 backdrop-blur-md rounded-xl p-4 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-md">
                  <AppleMusicIcon h={6} w={6} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white">
                    APPLE MUSIC
                  </h4>
                  <p className="text-xs text-gray-400">Listen on Apple Music</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <AppleMusicEmbed link="https://music.apple.com/us/album/the-crux-deluxe/1837525420" />
              </div>
            </motion.div>
          </div>
        </div> */}


        {/* I am making spotify and apple cards */}
        {/* <div className="w-[100%] h-[400px] flex justify-center items-center gap-5 mt-10">
          <div className="w-[25%] h-[400px]">
            <DJOSpotify artist={"djo"} height={400} width={320} />
          </div> */}
          {/* <div className="w-[25%] h-[300px] overflow-hidden">
            <AppleMusicEmbed link="https://music.apple.com/us/album/the-crux-deluxe/1837525420" height={150} width={320} />
          </div> */}

        

          {/* <div className="w-[35%] h-[400px]">
            <AppleMusicEmbed link="https://music.apple.com/us/album/the-crux-deluxe/1837525420" height={400} width={350} />
          </div>

           


        </div> */}
      </div>
    </section>

    <div className="w-[100%] h-[500px] overflow-hidden relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
            <img src={JoeGif}  className="w-[100%] h-[100%] object-cover" alt="JoeGif" />

            <div className="absolute inset-0 flex md:flex-row flex-col gap-5 items-center justify-center z-10 ">
              <p className="text-2xl md:text-4xl font-black text-white mr-5">
                FOLLOW ON{" "}
              </p>
              <div className="flex gap-5">
                <a href="https://www.youtube.com/@djomusic887" target="_blank">
                  <YoutubeIcon h={8} w={8} />
                </a>
                <a href="https://open.spotify.com/artist/5p9HO3XC5P3BLxJs5Mtrhm" target="_blank">
                  <SpotifyIcon h={8} w={8} />
                </a>
                <a href="https://music.apple.com/us/artist/djo/1473178582" target="_blank">
                  <AppleMusicIcon h={8} w={8} />
                </a>
                <a href="https://soundcloud.com/djokyri" target="_blank">
                  <SoundCloudIcon h={8} w={8} />
                </a>
                <a href="https://music.amazon.com/artists/B005I4FX1Y/djo" target="_blank">
                  <AmazonMusicIcon h={8} w={8} />
                </a>
              </div>
            </div>
          </div>

          </>
  );
}

{
  /* <div>
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
</div> */
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
