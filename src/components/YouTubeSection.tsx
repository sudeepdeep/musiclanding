import React from "react";

function YouTubeSection() {
  // Actual DJO video IDs and titles
  const videos = [
    {
      id: "ro8-I3DoU5w",
      title: "DJO - End of Beginning",
      description: "Official Music Video",
    },
    {
      id: "QjZ4gdBt4Qg",
      title: "DJO - GLOOM",
      description: "Official Music Video",
    },
    {
      id: "VQdPaXQihjk",
      title: "DJO - Figure You Out",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Video Embed */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>

              {/* Hover Effect - PNG Style Pop */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
}

export default YouTubeSection;
