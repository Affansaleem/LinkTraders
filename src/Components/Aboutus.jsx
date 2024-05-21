import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Styles/Aboutus.scss";
import { useEffect, useState } from "react";

function Aboutus() {
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
          <img src="images/aboutus.jpg" alt="aboutus.jpg" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              LINKS TRADERS
            </p>
            <h1 className="font-bold text-6xl">About Us</h1>
          </div>
        </div>
        <div className="text-center mx-3 my-5 ">
          <p className="text-sm font-semibold text-stone-500 mb-2">
            Established in 2004, SAREMCO International a sister project of
            SAREMCO Group, specialized in the production, export, and trading of
            agricultural products worldwide. Saremco Contact details will help
            you know about our business.
          </p>
          <p className="text-base text-stone-600">
            For further inquiries, Saremco Contact details are given below.
          </p>
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mx-10">
            <span className="font-extrabold text-5xl">WELCOME TO </span>
            <span className="font-thin text-5xl">LINKS TRADERS</span>
            <p className="text-sm font-light text-stone-500">
              Established in 2004, SAREMCO International is related to SAREMCO
              Group. Saremco International specializes in the production,
              export, and trading of agricultural products worldwide.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              It is A to Z leading Agro-industrial company with the capacity to
              adjust itself to the conditions in each country. SAREMCO
              International manages diverse farming and livestock feed impacting
              the lives of every related being. it is committed to providing
              clients with the Quality Product.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Ambitious plans and the vision of a strong and modern business
              partner are being successfully achieved. Saremco International is
              now expanding into new projects in export. Modern trends in the
              field of agriculture, crop cultivation, and subsequent trading.
              our Processing of agricultural crops is considered by Saremco
              management as the basis of a successful long-term strategy.
            </p>
          </div>
          <img
            src="images/scientist.jpg"
            alt="scientist.jpg"
            className="col-span-1"
          />
        </div>
        <div className="background-image">
          <img src="images/fruits.jpg" alt="fruits.jpg" />
          <div className="content-core">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              CORE VALUES
            </p>
            <p className="font-semibold mt-4 text-md">
              Our global reach gives us the opportunity to export agricultural
              products at competitive prices in the market. These efficiencies
              allow us to provide the customer with the highest standard of
              quality without compromising on value & quality.
            </p>
          </div>

          <div className="content-core-div bg-white container  grid grid-cols-2  p-5">
            <div>
              <img
                src="images/vegi.jpg"
                alt="images/vegi.jpg"
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

export default Aboutus;
