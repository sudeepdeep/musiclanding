import BannerOne from "../components/BannerOne";
import Footer from "../components/Footer";
import "../components/Home.css";
import MailingList from "../components/Mails/MailingList";
import Merchandise from "../components/Merchandise";
import News from "../components/News";
import NoiseOverlay from "../components/Noise";
import SpotifyFixedPlayer from "../components/SpotifyFixedPlayer";
import Tour from "../components/Tour";
import YouTubeSection from "../components/YouTubeSection";

function Home() {
  return (
    <div className="home-wrapper">
      <NoiseOverlay />
      <BannerOne />
      {/* <BannerTwo /> */}
      <News />
      <Tour />
      <Merchandise />
      <YouTubeSection />
      <MailingList />
      <Footer />
      <SpotifyFixedPlayer />
    </div>
  );
}

export default Home;
