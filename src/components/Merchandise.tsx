import React from "react";
import { merchandiseImages } from "../utils/constants";

function Merchandise() {
  return (
    <section
      id="store"
      className="relative bg-black py-20 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Gradient */}

      <div className="absolute -z-0 inset-0">
        <div
          className="absolute top-[-20px] left-[-280px] w-[600px] h-[600px] rounded-full opacity-35"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-100 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">
            OFFICIAL{" "}
            <span
              className="text-transparent"
              style={
                {
                  WebkitTextStroke: "3px white",
                } as React.CSSProperties
              }
            >
              {" "}
              STORE
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get exclusive DJO merchandise, from limited edition vinyl to tour
            apparel
          </p>
        </div>

        {/* Merchandise Slider */}
        <div className="mb-16">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 w-max">
              {merchandiseImages.map((item: any, index: number) => (
                <div
                  key={index}
                  className="group relative w-80 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-100 flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between mb-4 flex-grow">
                      <span className="text-sm text-gray-400 uppercase tracking-wider">
                        {item.description}
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        {item.region}
                      </span>
                    </div>

                    {/* Buy Button */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-3 border-2 border-white text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm mt-auto"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        {/* <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
            Follow DJO
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                name: "Instagram",
                icon: "📷",
                url: "https://instagram.com/djomusic",
              },
              {
                name: "Facebook",
                icon: "📘",
                url: "https://facebook.com/djomusic",
              },
              {
                name: "TikTok",
                icon: "🎵",
                url: "https://tiktok.com/@djomusic",
              },
              {
                name: "YouTube",
                icon: "📺",
                url: "http://youtube.com/@djomusic887",
              },
              {
                name: "Spotify",
                icon: "🎧",
                url: "https://open.spotify.com/artist/djo",
              },
              {
                name: "Apple Music",
                icon: "🍎",
                url: "https://music.apple.com/artist/djo",
              },
              {
                name: "X (Twitter)",
                icon: "🐦",
                url: "https://x.com/djomusic",
              },
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="hidden sm:inline">{social.name}</span>
              </a>
            ))}
          </div>
        </div> */}

        {/* Visit Store Button */}
        <div className="text-center">
          <a
            href="https://store.djomusic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 border-2 border-white text-white font-bold  hover:bg-white hover:text-black transition-all duration-300"
          >
            Visit Official Store
          </a>
        </div>
      </div>
    </section>
  );
}

export default Merchandise;
