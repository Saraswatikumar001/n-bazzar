import HeroSlider from "./HeroSlider";
import Categories from "./Categories";
import TrendingOffers from "./TrendingOffers";
import DealOfTheDay from "./DealOfTheDay";
import FeaturedCollection from "./FeaturedCollection";
import BestSellers from "./BestSellers";
import ExclusiveBrands from "./ExclusiveBrands";
import CustomerTestimonials from "./CustomerTestimonials";
import NewsletterSignup from "../../components/layout/NewsletterSignup";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <Categories />
      <TrendingOffers />
      <DealOfTheDay />
      <FeaturedCollection />
      <BestSellers />
      <ExclusiveBrands />
      <CustomerTestimonials />
      <NewsletterSignup />
     
    </>
  );
}
