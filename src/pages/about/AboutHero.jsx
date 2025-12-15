import heroImg from "../../assets/about-hero.jpg";

const AboutHero = () => {
  return (
    <section
      className="relative py-24 px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About N-Bazar
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Smart Inventory Management. Seamless Online Shopping.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
