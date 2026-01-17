import BannerTwo from "../components/BannerTwo";
import Footer from "../components/Footer";
import MailingList from "../components/Mails/MailingList";
import Merchandise from "../components/Merchandise";
import Tour from "../components/Tour";
import YouTubeSection from "../components/YouTubeSection";
import "../components/Home.css";
import NoiseOverlay from "../components/Noise";

function Home() {
  return (
    <div className="home-wrapper">
      <NoiseOverlay />
      <BannerTwo />
      <Tour />
      <Merchandise />
      <YouTubeSection />
      <MailingList />
      <Footer />
    </div>
  );
}

export default Home;
