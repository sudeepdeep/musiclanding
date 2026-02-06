import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { extractTours } from "../utils/extractTours";
import { toursConstantReponse } from "../utils/constants";

function Tour() {
  const [tours, setTours] = useState<any[]>([]);

  useEffect(() => {
    const extractedTours = extractTours(toursConstantReponse);
    setTours(extractedTours);
  }, []);

  return (
    <section
      id="tour"
      className="relative bg-black py-20 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">
            WORLD{" "}
            <span
              className="text-transparent"
              style={
                {
                  WebkitTextStroke: "3px white",
                } as React.CSSProperties
              }
            >
              TOUR
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400  max-w-3xl mx-auto leading-relaxed">
            Join DJO on the Back On You World Tour 2026
          </p>
        </div>

        {/* Tour Cards */}
        <div className="space-y-4">
          {tours.slice(0, 6).map((tour, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                {/* Date */}
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {tour.date}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {tour.year}
                  </div>
                </div>

                {/* Venue Info */}
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {tour.venue}
                  </h3>
                  <p className="text-gray-300 mb-1">{tour.location}</p>
                  {tour.details && (
                    <p className="text-sm text-gray-400">{tour.details}</p>
                  )}
                </div>

                {/* Ticket Button */}

                <div className="text-center md:text-right">
                  <a
                    href={tour.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="inline-block px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-300"
                  >
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-white text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
                    >
                      Get Tickets
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Tours Button */}
        <div className="text-center mt-12">
          <button onClick={() => window.open("https://go.seated.com/notifications/welcome/691420a1-0870-40b4-b992-17b335ed9b20", "_blank")} className="px-12 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
            Follow DJO
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tour;
