import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpotifyFixedPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Replace this with your actual Spotify track URI
  // Format: spotify:track:TRACK_ID
  // You can get this from the Spotify share menu -> Copy Song Link -> Extract the ID
  // const spotifyTrackId = "50xPaSwYLoKZrLhPyuHwvC"; // Example: "Mr. Blue Sky" by ELO

  // Or use album/playlist
  const spotifyAlbumId = "1xQGeKOIMZrPBUlDJuqZGQ"; // Example album

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (isExpanded) setIsExpanded(false);
  };

  const closePlayer = () => {
    setIsExpanded(false);
    setIsMinimized(true);
  };

  return (
    <>
      <div className="fixed -bottom-[65px] left-0 right-0 z-50">
        <iframe
          title={"spotify playlist"}
          style={{ borderRadius: "0" }}
          src={`https://open.spotify.com/embed/album/${spotifyAlbumId}?utm_source=generator&theme=0`}
          // For album use: src={`https://open.spotify.com/embed/album/${spotifyAlbumId}?utm_source=generator&theme=0`}
          // For playlist use: src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </>
  );
}
