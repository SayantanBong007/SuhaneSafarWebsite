import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import UpcomingAdventures from "../components/UpcomingAdventures";
import CommunityTrips from "../components/CommunityTrips";
import CommunityTreks from "../components/CommunityTreks";
import Amenities from "../components/Amenities";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <UpcomingAdventures />
    <CommunityTrips />
    <CommunityTreks />
    <Amenities />
    <WhyChooseUs />
    <Reviews />
    <Footer />
  </div>
);

export default Home;