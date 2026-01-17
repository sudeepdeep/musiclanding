import React, { useState, useEffect } from "react";
import { Music, ExternalLink, Copy, Check } from "lucide-react";
import { useParams } from "react-router-dom";

const SONGS_DATABASE: any = {
  "end-of-beginning": {
    title: "End of Beginning",
    artist: "DJO",
    album: "Album",
    releaseYear: "2025",
    coverArt:
      "https://i.scdn.co/image/ab67616d00001e02a277a7311694d4b7dfe37f06",
    platforms: {
      spotify: "https://open.spotify.com/track/example",
      appleMusic: "https://music.apple.com/album/example",
      youtube: "https://www.youtube.com/watch?v=example",
      youtubeMusic: "https://music.youtube.com/watch?v=example",
    },
  },
};

const PLATFORM_INFO: any = {
  spotify: { name: "Spotify" },
  appleMusic: { name: "Apple Music" },
  youtube: { name: "YouTube" },
  youtubeMusic: { name: "YouTube Music" },
  amazonMusic: { name: "Amazon Music" },
  tidal: { name: "Tidal" },
  deezer: { name: "Deezer" },
  soundcloud: { name: "SoundCloud" },
};

const PLATFORM_INFO_ICONS: any = {
  spotify: {
    name: "Spotify",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  appleMusic: {
    name: "Apple Music",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.001-.08-.004-.12-.004H5.986c-.04 0-.08.003-.12.004-.525.015-1.046.057-1.563.15-.674.121-1.304.353-1.878.727-1.118.733-1.863 1.732-2.18 3.043-.175.72-.24 1.452-.24 2.19v11.754c0 .738.065 1.47.24 2.189.317 1.31 1.062 2.31 2.18 3.044.574.374 1.204.606 1.878.726.517.094 1.038.136 1.563.151.04.001.08.004.12.004h12.028c.04 0 .08-.003.12-.004.526-.015 1.047-.057 1.564-.151.673-.12 1.303-.352 1.577-.726 1.118-.734 1.863-1.734 2.18-3.044.175-.719.24-1.451.24-2.189V6.124z" />
      </svg>
    ),
  },
  youtube: {
    name: "YouTube",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  youtubeMusic: {
    name: "YouTube Music",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  amazonMusic: {
    name: "Amazon Music",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  tidal: {
    name: "Tidal",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  deezer: {
    name: "Deezer",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  soundcloud: {
    name: "SoundCloud",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
};

export default function MusicPage() {
  const { slug } = useParams();
  //   const [currentSlug, setCurrentSlug] = useState("IzItACrime");
  const [song, setSong] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const songData = SONGS_DATABASE[slug ?? 0];
    setSong(songData);
  }, [slug]);

  const handleShare = async () => {
    const url = `${window.location.origin}/music/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!song) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`,
            }}
          />
        </div>
        <div className="text-center relative z-10">
          <Music className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-2xl text-white font-bold tracking-wider">
            SONG NOT FOUND
          </h2>
          <p className="text-gray-500 mt-2 uppercase text-sm tracking-widest">
            Invalid Slug
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 right-32 w-[600px] h-[600px] rounded-full opacity-100"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Demo Slug Selector */}
      {/* <div className="border-b border-white/10 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex gap-4 items-center justify-center flex-wrap">
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Demo Slug:
          </span>
          {Object.keys(SONGS_DATABASE).map((slug) => (
            <button
              key={slug}
              onClick={() => setCurrentSlug(slug)}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all border ${
                currentSlug === slug
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/20 hover:border-white"
              }`}
            >
              {slug}
            </button>
          ))}
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Album Cover */}
            <div className="relative">
              <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden relative group">
                <img
                  src={song?.coverArt}
                  alt={`${song?.title} cover`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="border-2 border-white p-4">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Song Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-block border border-white/20 px-4 py-2">
                  <span className="text-xs tracking-widest uppercase text-white/70">
                    Single
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">
                  {song.title}
                </h1>

                <p className="text-2xl md:text-3xl text-white/70 font-light tracking-wide">
                  {song.artist}
                </p>

                <div className="flex gap-4 text-sm text-white/50 tracking-widest uppercase">
                  <span>{song.album}</span>
                  <span>•</span>
                  <span>{song.releaseYear}</span>
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="px-8 py-4 border-2 border-white text-white font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-white hover:text-black w-fit flex items-center gap-3"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Link Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Share Song
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-16"></div>

          {/* Platform Links Section */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                LISTEN NOW
              </h2>
              <p className="text-white/50 text-sm tracking-widest uppercase">
                Available on {Object.keys(song.platforms).length} Platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(song.platforms).map(([platform, url]: any) => {
                const platformData = PLATFORM_INFO[platform];

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                  >
                    <div className="border-2 border-white/20 px-6 py-5 transition-all duration-300 hover:border-white hover:bg-white relative">
                      <div className="flex items-center justify-between relative z-10">
                        <span className="flex items-center gap-[20px] text-lg font-semibold tracking-wide uppercase transition-colors duration-300 group-hover:text-black">
                          {platformData.name}{" "}
                          {PLATFORM_INFO_ICONS[platform]["icon"]}
                        </span>
                        <ExternalLink className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />
                      </div>

                      {/* Hover gradient effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
                        }}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs tracking-widest uppercase">
              Share this link to spread the music
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
