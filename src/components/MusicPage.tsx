import React, { useState, useEffect } from "react";
import { Music, ExternalLink, Copy, Check } from "lucide-react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AmazonMusicIcon,
  AppleMusicIcon,
  DeezerIcon,
  SoundCloudIcon,
  SpotifyIcon,
  TidalIcon,
  YoutubeIcon,
  YoutubeMusicIcon,
} from "../assets/Icons";
import { spotifyMapping } from "../utils/constants";
import Footer from "./Footer";

const SONGS_DATABASE: any = {
  "end-of-beginning": {
    title: "End of Beginning",
    artist: "DJO",
    album: "Song",
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
    icon: <SpotifyIcon />,
  },
  appleMusic: {
    name: "Apple Music",
    icon: <AppleMusicIcon />,
  },
  youtube: {
    name: "YouTube",
    icon: <YoutubeIcon />,
  },
  youtubeMusic: {
    name: "YouTube Music",
    icon: <YoutubeMusicIcon />,
  },
  amazonMusic: {
    name: "Amazon Music",
    icon: <AmazonMusicIcon />,
  },
  tidal: {
    name: "Tidal",
    icon: <TidalIcon />,
  },
  deezer: {
    name: "Deezer",
    icon: <DeezerIcon />,
  },
  soundcloud: {
    name: "SoundCloud",
    icon: <SoundCloudIcon />,
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
              <div className="w-[380px] h-[360px] md:w-[400px] md:h-[380px] flex justify-center items-center">
                <SpotifyEmbed song={slug} />
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
                  {/* for last word add <span
                                className="text-transparent"
                                style={
                                  {
                                    WebkitTextStroke: "3px white",
                                  } as React.CSSProperties
                                }
                              >YOU</span> these styles */}
                  {song.title.split(" ").map((word: string, index: number) => {
                    const isLastWord = index === song.title.split(" ").length - 1;
                    
                    return (
                      <span key={index} className="uppercase">
                        {isLastWord ? (
                          <span
                            className="text-transparent"
                            style={{
                              WebkitTextStroke: "3px white",
                            } as React.CSSProperties}
                          >
                            {word}
                          </span>
                        ) : (
                          `${word} `
                        )}
                      </span>
                    );
                  })}
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
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                LISTEN NOW
              </h2>
              <p className="text-white/50 text-sm tracking-widest uppercase">
                Available on {Object.keys(song.platforms).length} Platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                    <div className="border-2 border-white/20 px-4 py-3 transition-all duration-300 hover:border-white hover:bg-white relative">
                      <div className="flex items-center justify-between relative z-10">
                        <span className="flex items-center gap-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 group-hover:text-black">
                          {platformData.name}{" "}
                          {PLATFORM_INFO_ICONS[platform]["icon"]}
                        </span>
                        <ExternalLink className="w-4 h-4 transition-colors duration-300 group-hover:text-black" />
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
      <Footer />
    </div>
  );
}

export function SpotifyEmbed({ song }: any) {
  return (
    <iframe
      title="djo-music"
      src={`https://open.spotify.com/embed/track/${spotifyMapping[song]}`}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="flex items-center mt-8"
    />
  );
}

export function YouTubeChannelEmbed({ type = "playlist", id }: any) {
  // type can be: "playlist", "album", or "track"

  return (
    <iframe
      width="300"
      height="452"
      src={`https://www.youtube.com/embed/videoseries?list=${id}`}
      title="YouTube Music player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export function AppleMusicEmbed({ link, height, width }: any) {
  // Convert regular Apple Music link to embed link
  const embedUrl = link.replace("music.apple.com", "embed.music.apple.com");

  return (
    <iframe
      title="apple iframe"
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      frameBorder="0"
      width={width ?? "300"}
      height={height ?? "452"}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={embedUrl}
    />
  );
}

export function DJOSpotify({ artist, height, width }: any) {
  switch (artist) {
    case "djo":
    default:
      return (
        <iframe
          title="djo-music"
          src="https://open.spotify.com/embed/artist/5p9HO3XC5P3BLxJs5Mtrhm"
          width={width ?? "300"}
          height={height ?? "452"}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      );
  }
}
