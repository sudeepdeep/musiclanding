import Footer from "../components/Footer";
import MailingList from "../components/Mails/MailingList";
import Merchandise from "../components/Merchandise";
import Tour from "../components/Tour";
import YouTubeSection from "../components/YouTubeSection";
import "../components/Home.css";
import NoiseOverlay from "../components/Noise";
import SpotifyFixedPlayer from "../components/SpotifyFixedPlayer";
import BannerOne from "../components/BannerOne";
import BannerThree from "../components/BannerThree";
import { motion } from "framer-motion";
import BannerTwo from "../components/BannerTwo";

function Home() {
  return (
    <div className="home-wrapper">
      <NoiseOverlay />
      <BannerOne />
      {/* <BannerTwo /> */}
      <NewsSection />
      <Tour />
      <Merchandise />
      <YouTubeSection />
      <MailingList />
      <Footer />
      <SpotifyFixedPlayer />
    </div>
  );
}

// News Section Component
function NewsSection() {
  const newsItems = [
    {
      title: "DJOS RELEASES NEW SINGLE 'THE CRUX'",
      date: "March 15, 2025",
      description: "The latest track from DJO's upcoming album is now available on all streaming platforms.",
      link: "#"
    },
    {
      title: "DJOS ANNOUNCES WORLD TOUR 2025",
      date: "March 10, 2025",
      description: "Tickets now on sale for the highly anticipated world tour starting this summer.",
      link: "#"
    },
    {
      title: "DJOS COLLABORATES WITH TOP ARTISTS",
      date: "March 5, 2025",
      description: "Exciting new collaborations coming soon. Stay tuned for more updates.",
      link: "#"
    }
  ];

  return (
    <section className="news-section py-16 bg-black">
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
          <p className="text-gray-400 text-xl md:text-2xl">Stay updated with the latest from DJO</p>
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

export default Home;
