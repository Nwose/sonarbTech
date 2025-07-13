import HeroSection from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import DisplayedCourses from "../components/DisplayedCourses";
import UpcomingEvents from "../components/UpcomingEvents";
import LatestBlogs from "../components/LatestBlogs";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCourses />
      <DisplayedCourses />
      <UpcomingEvents />
      <LatestBlogs />
      <CallToAction />
    </div>
  );
};

export default Home;
