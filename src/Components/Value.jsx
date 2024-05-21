import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Styles/Aboutus.scss";
import { useEffect, useState } from "react";

function Value() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "PREMIUM SOURCING",
      content:
        "Saremco International sources agriculture commodities and raw materials from many different reliable sources including our own farms. We are proud of our significant experience in meeting customer needs and customized packaging for export.",
    },
    {
      title: "QUALITY EXPORT",
      content:
        "Our global scale gives us the selling power to export agricultural products and animal forage at an extremely competitive cost in the market. These efficiencies allow us to provide the customer with the highest standard of quality without compromising on value.",
    },
    {
      title: "BEST SERVICE",
      content:
        "Our global scale gives us the selling power to export agricultural products and animal forage at an extremely competitive cost in the market. These efficiencies allow us to provide the customer with the highest standard of quality without compromising on value.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 0 ? slides.length - 1 : prevSlide - 1
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <div className="background-image">
          <img src="images/value.jpg" alt="aboutus.jpg" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              CORE
            </p>
            <h1 className="font-bold text-6xl">VALUES & STRENGTHS</h1>
          </div>
        </div>

        <div className=" grid grid-cols-2  items-center p-20">
          <div className=" col-span-1 mx-10">
            <span className="font-extrabold text-5xl">LINKS TRADERS </span>
            <span className="font-thin text-5xl">VALUES& STRENGTHS</span>

            <p className="text-sm font-light text-stone-500 mt-2">
              Link Traders Values & Strengths are measured by the working
              capacity of our team. Our team is committed to sourcing only the
              best of the best with every product we sell. We promote
              all-natural products that we use ourselves. Products featured are
              all-natural. We stand behind and entrust even with our own
              personal health and wellbeing.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Link Traders is proud to present each one of our all-natural
              products, organically sourced, and certified natural products to
              you. Together we can help protect our health and the environment
              by living and supporting an all-natural lifestyle.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Link Traders has widespread working units and fields all around in
              Pakistan fully equipped with the latest machinery. We operate the
              functions of research & development, and evolvement of our animal
              feed items. We have a team of experienced professionals,
              researches, quality managers, and skilled laborers that describes
              our Values & Strengths.
            </p>
            <div className="mt-10">
              <h1 className="text-5xl font-bold">Link Traders</h1>
              <h1 className="text-5xl font-light"> GOALS</h1>
              <br />
              <p className="text-sm font-light text-stone-500">
                To achieve our goal we work for mutual benefits from serving
                humanity to earning profits. Our primary motive is to supply the
                best quality at reasonable prices. SAREMCO International
                believes in achieving the high quality of the products and
                customer satisfaction through efficient management, significant
                craft, and strict quality controls.
              </p>
            </div>
          </div>
          <img
            src="images/value-2.jpg"
            alt="value-2.jpg"
            className="col-span-1"
          />
        </div>
        <div className="background-image">
          <img src="images/roots.jpg" alt="roots.jpg" />
          <div className="content-core">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              STRENGTHS
            </p>
            <p className="font-semibold mt-4 text-md">
              Our major Values & Strengths are Competitive prices, Good quality,
              customized packaging & Secure logistics.
            </p>
          </div>

          <div className="content-core-div bg-white container grid grid-cols-2 py-2 px-2">
            <div>
              <img
                src="images/protect-plant.jpg"
                alt="images/protect-plant.jpg"
              />
            </div>
            <div className="relative overflow-hidden">
              <div
                className="absolute top-0  w-full h-full flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div>
                      <h2 className="text-xl text-black font-semibold mb-2">
                        {slides[index].title}
                      </h2>
                      <p className="text-md font-light text-stone-500 p-3">
                        {slides[index].content}
                      </p>
                      <p className="text-md font-light text-stone-500 p-3">
                        {slides[index].content}
                      </p>
                      <p className="text-md font-light text-stone-500 p-3">
                        {slides[index].content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 w-full flex justify-center mt-4">
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      className={`w-3 h-3 rounded-full bg-stone-500 cursor-pointer ${
                        index === currentSlide ? "bg-yellow-400" : ""
                      }`}
                      onClick={() => handleDotClick(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Value;
