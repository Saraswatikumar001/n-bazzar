import AboutHero from "./AboutHero";
import WhoWeAre from "./WhoWeAre";
import MissionVision from "./MissionVision";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseUs from "./WhyChooseUs";

const AboutUs = () => {
    return (
        <div className="bg-gray-200 text-black">
          <AboutHero />
          <WhoWeAre />
          <MissionVision />
          <WhatWeOffer />
          <WhyChooseUs />
        </div>
    );
}

export default AboutUs;