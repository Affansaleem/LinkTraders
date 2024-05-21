import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Styles/Whyus.scss";
import { useEffect, useState } from "react";

function Whyus() {
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
    }, 5000); // Change slide every 5 seconds

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
          <img src="images/whyus.jpg" alt="mission.jpg" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              Why
            </p>
            <h1 className="font-bold text-6xl">CHOOSE US?</h1>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mx-10">
            <span className="font-extrabold text-5xl">WHY ARE WE </span>
            <span className="font-thin text-5xl">BEST CHOICE</span>
            <p className="text-sm font-light text-stone-500 m-3">
              We are proud to present each one of our all-natural products,
              organically sourced and certified natural products to you. This is
              a big reason that Why Saremco should be your no.1 choice for
              agriculture products from Pakistan. Together we can help protect
              our health and the environment by living and supporting an
              all-natural lifestyle. We have widespread working units and fields
              all around in Pakistan fully equipped with the latest machinery.
            </p>
            <br />
            <span className="font-extrabold text-5xl">WHY </span>
            <span className="font-thin text-5xl">LINKS TRADERS</span>
            <p className="text-sm font-light text-stone-500 m-3">
              We operate the functions of manufacturing, development, and
              evolvement of our animal forage items. We have a team of
              experienced professionals, researches, quality managers, and
              skilled laborers. We are working for mutual benefits from serving
              humanity to earning profit. Our primary motive is to supply the
              best quality at a reasonable price. We believe in achieving the
              high quality of the products and customer satisfaction through
              efficient management.
            </p>
          </div>
          <img
            src="images/sunflower.jpg"
            alt="mission-2.jpg"
            className="col-span-1"
          />
        </div>
        <div className="background-image">
          <img src="images/turbines.jpg" alt="factory.jpg" />
          <div className="content-core">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              OUR VISION
            </p>
            <p className="font-semibold mt-4 text-md">
              Our Mission & Vision is to Provide hygienic, best in quality, and
              safe food to the global community. Your satisfaction in all
              aspects is not only our highest priority but also our basic aim to
              fulfill.
            </p>
          </div>

          <div className="content-core-div bg-white container  grid grid-cols-2  p-5">
            <div>
              <img
                src="images/farm-fields.jpg"
                alt="images/farm-fields.jpg"
                className="w-60"
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

export default Whyus;
