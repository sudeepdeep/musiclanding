import { motion } from "framer-motion";
import React from 'react';
import "../components/Home.css";
function News() {
const newsItems = [
  {
    title: "DJO SURPRISE-RELEASES 'THE CRUX DELUXE' ALBUM",
    date: "September 12, 2025",
    description: "DJO dropped a surprise deluxe edition of his third album with 12 additional tracks, released independently under AWAL.",
    link: "https://en.wikipedia.org/wiki/The_Crux_(Djo_album)"
  },
  {
    title: "DJO KICKS OFF 'ANOTHER BITE TOUR' FALL LEG",
    date: "September 26, 2025",
    description: "DJO began his Another Bite tour with a sold-out performance at College Street Music Hall, featuring former bandmates Post Animal as the opening act.",
    link: "https://yaledailynews.com/blog/2025/09/29/djo-performs-to-sweaty-crowd-at-college-street-music-hall/"
  },
  {
    title: "DJO ANNOUNCED FOR BRISTOL'S FORWARDS PRESENTS 2026",
    date: "February 4, 2026",
    description: "DJO will support Lorde at Bristol's Forwards Presents event on August 28, 2026, performing alongside artists like Audrey Hobert and Rose Gray.",
    link: "https://www.nme.com/news/music/lorde-and-djo-lead-line-up-for-bristols-forwards-festival-2026-buy-tickets-3927189"
  }
];

  return (
    <section className="news-section py-16 bg-black" id="news">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-4">
            LATEST{" "}
            <span
              className="text-transparent"
              style={
                {
                  WebkitTextStroke: "3px white",
                } as React.CSSProperties
              }
            >
              NEWS
            </span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl">Stay updated with the latest from <img className="md:w-20 w-13 md:h-8 h-5 inline-block" src="https://store.djomusic.com/cdn/shop/files/CruxDeluxe_LOGO_410x.png?v=1757606871" alt="" /></p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="news-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-400 font-semibold tracking-wider uppercase">
                  {news.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                {news.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {news.description}
              </p>
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold text-sm transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News