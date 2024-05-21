import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Styles/Alfalfa.scss";
import { useEffect, useState } from "react";

function Alfalfa() {
  const [setCurrentSlide] = useState(0);

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

  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <div className="background-image">
          <img src="images/alfalfa.jpg" alt="rhodes-grass.png" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              BEST CULTIVATION
            </p>
            <h1 className="font-bold text-6xl">ALFALFA HAY</h1>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20 mx-20">
          <div className="col-span-1 mx-10">
            <span className="font-extrabold text-5xl">ABOUT </span>
            <span className="font-thin text-5xl">ALFALFA HAY</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Alfalfa hay or loosen hay is one of the best sources to provide
              fibre and protein to your animals. It is also known as legumes
              hay. People who own farm animals know the importance of this hay.
              There is a big demand for Alfalfa hay in Pakistan.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Pakistan has perfect weather conditions to grow Lucerne (Alfalfa
              Hay). If you want to compare hay with grass then believe us there
              is no comparison. Hay has high protein, minerals, and vitamin
              values. Alfalfa cultivation in Pakistan is now increasing
              exponentially.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              It is an excellent source of energy for animals. It is one of the
              best nutritionist standpoints if cure properly. You can feed
              alfalfa hay to all your farm animals including goats, cows,
              horses, sheep, and hens.
            </p>
          </div>
          <img
            src="images/about-alfalfa.jpg"
            alt="scientist.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mr-2">
            <span className="font-extrabold text-5xl">ALFALFA HAY BY</span>
            <span className="font-thin text-5xl">LINKS TRADERS</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Right now, alfalfa hay is in demand for both international and
              domestic markets. Saremco international is one of the largest
              alfalfa hay exporters from Pakistan. Pakistani Alfalfa hay
              contains more nutritional values than any other grass or hay
              available in the market. This is one of the best hay for sale in
              Pakistan.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              It has low fiber content in it and more calcium and proteins.Hay
              will help the cattle breeders to increase milk production by cows.
              Saremco international provides its customers with the best quality
              alfalfa hay in multiple origins of the world. Here at Saremco
              International, we manage every order with precision.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              We always pay proper attention to our customer’s needs, and every
              order, processing, storage, and booking is manage with precision.
              Saremco doesn’t compromise on the quality of the product and our
              service, no matter the order is more significant or small. We
              always keep the highest standards for our products. We also take
              care of all extra content mix with this hay during the tracing of
              chemicals and pesticides. All these steps are look after carefully
              so our customers get the best quality alfalfa hay.
            </p>
          </div>
          <img
            src="images/alfalfa-hay.png"
            alt="rhodes-stock.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <img
            src="images/alfalfa-packaging.png"
            alt="rhodes-stock.jpg"
            className="col-span-1"
          />
          <div className="col-span-1 ml-3">
            <span className="font-extrabold text-5xl">ALFALFA </span>
            <span className="font-thin text-5xl">PACKAGING</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Alfalfa hay Exporters had always pack them in bales. The same
              procedure is followed by Saremco international as well. These
              sizes configure Alfalfa hay price in Pakistan. We pack them in
              three different types of bales that we are going to discuss below.
              All these bales are shipped at 40 feet container price in Pakistan
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Regular Bales This is a kind of hay that does not require an extra
              packing house. This is provide by all animal feed companies in
              Pakistan. These bales are produced on the field at the time of
              wheat harvest. This packaging is famous and mostly use in the
              market. Saremco international follow all the standards for making
              regular bales and preserving Wheat straws. Double Compress bale In
              this packaging, the regular bales are compressed further in a
              machine to make smaller alfalfa hay bales. Mostly this type of
              packaging is done when exporting hay to another country. This will
              occupy less space in the container but the same volume of alfalfa
              hay.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Large size bales Saremco also provides large bale alfalfa in
              Pakistan, which are approximately more than 100 kg. These Alpha
              alpha grass hay bales are produce to satisfy those customers who
              require an intermediate size of bales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mr-3">
            <span className="font-extrabold text-5xl">MODERN </span>
            <span className="font-thin text-5xl">ALFALFA</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Saremco is always trying to keep up with the pace of Modern ways.
              We cultivate Alfalfa hay at our farms with the latest Korean
              machinery. We use these machines to harvest this hay and also make
              bundles.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Saremco international knows the value of modernization. Our
              organization has experience personals who look after all alfalfa
              hay production procedures. They use new methods to grow better
              quality as one of the best alfalfa suppliers.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Saremco International is among one of the best Alfalfa hay
              exporters in Pakistan. Our other animal forage product like Wheat
              Straw, Rhodes Grass Hay, and Corn Silage are top exporting
              products from Pakistan. We provide our customers with the best
              quality products. Right now, we are exporting our hay to UAE,
              Central Asia, Europe, and South Korea. We serve the most trusted
              products in the market.
            </p>
          </div>
          <img
            src="images/modern-alfalfa.png"
            alt="our-rhodes.png"
            className="col-span-1"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Alfalfa;
