import Header from "./components/header/header";
import HeaderContent from "./components/header/header-content";
import Infinite_Logo_Slider from "./components/molecules/infinite-logo";
import AboutSection from "./components/organism/AboutSection";
import BlogSection from "./components/organism/BlogSection";
import FeatureSection from "./components/organism/FeatureSection";
import Footer from "./components/organism/footer";
import IntegrationSection from "./components/organism/IntegrationSection";
import ServiceSection from "./components/organism/ServiceSection";
import TestimonialSection from "./components/organism/TestimonialSection";


export default function Home() {
  return (
    <>
      <Header />
      <HeaderContent />
      <Infinite_Logo_Slider /> 
      <ServiceSection />
      <AboutSection />
      <FeatureSection />
      <IntegrationSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </>
  );
}
