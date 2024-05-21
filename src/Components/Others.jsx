import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Styles/Others.scss";
import { useEffect, useState } from "react";

function Others() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <div className="background-image">
          <img src="images\others\others.jpg" alt="images\others\others.jpg" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              OTHER
            </p>
            <h1 className="font-bold text-6xl">CEREALS & GRAINS</h1>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20 mx-20">
          <div className="col-span-1 mx-10">
            <span className="font-extrabold text-5xl">ABOUT </span>
            <span className="font-thin text-5xl">OTHER CEREALS & GRAINS</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Wheat straw Hay is an agriculture by-product which is being used
              as animal fodder. it is also known as lowes straw bales. After the
              seed and grain are separated from a straw for human consumption,
              the left behind hay straws undergo from a procedure to preserve
              these straws as forage and use for mushroom tissue culture.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              In most countries of Asia and other countries, this straw is used
              for animals. Indeed, it is often the staple as feed. Even in some
              parts of Europe, it is traditionally fed to farm animals. Such hay
              and straws form an essential item of the Farm animals’ feeds.
            </p>
          </div>
          <img
            src="images\others\others-1.jpg"
            alt="images\others\others-1.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mr-5">
            <span className="font-extrabold text-5xl">OATS</span>
            {/* <span className="font-thin text-5xl">RICE</span> */}
            <p className="text-sm font-light text-stone-500 mt-3">
              Saremco International is one of the biggest wheat straw exporters
              Pakistan, we offer the best quality Wheat straw hay for export.
              The protein content of our bales of straw ranges from 6 to 8%. Our
              fibre content varies from 25 to 65%. We have analyzed our wheat
              waste or hay straw at a feed testing laboratory, then checked by
              ration balancing to meet the farm animals’ needs for each stage.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              In general, Wheat straw and hay have better feed quality than any
              other straws. In turn, we have better quality than any other straw
              in the market. Saremco also deals in Year-old straw, which is
              often found to be more palatable than fresh Wheat straw. We offer
              wheat straw wholesale trade all over the globe. Saremco
              International is one of the leading Wheat waste suppliers in
              Pakistan and It has higher levels of protein and energy than any
              other bale of straws. Our straws are very palatable and have been
              used successfully by cattle producers over the years.
            </p>
          </div>
          <img
            src="images\others\others-2.jpg"
            alt="images\others\others-2.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <img
            src="images\others\others-3.jpg"
            alt="images\others\others-3.jpg"
            className="col-span-1"
          />
          <div className="col-span-1 ml-5">
            <span className="font-extrabold text-5xl">BARLEY </span>
            {/* <span className="font-thin text-5xl">EXPORT AND PACKAGING </span> */}
            <p className="text-sm font-light text-stone-500 mt-3">
              Wheat Straw is used into the feeding program during the pregnant
              cows in their’ second-trimester it is very useful. In this stage,
              their requirements for protein and energy are way lower than late
              in pregnancy and during early lactation. Importers usually get
              bulk straws because bundle or bale of wheat straw can be used for
              a long period of time.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Their stage of maturity determines all the nutrients in the
              roughage of straw at the time of harvest. Generally, the earlier
              you harvest, the higher the energy and protein content will be in
              it. Digestibility and palatability will also be higher if you cut
              the crop earlier. You require two bails of hay to feed a cow for
              two weeks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mr-3">
            <span className="font-extrabold text-5xl">RYE</span>
            {/* <span className="font-thin text-5xl">EXPORT AND PACKAGING </span> */}
            <p className="text-sm font-light text-stone-500 mt-3">
              Saremco International Grinding or processing of Wheat straw will
              increase the daily intake of a cow. Although it still needs
              additional protein and energy Another fact, we consider in the
              processing of Wheat hay and straw is that the farm animals intake
              decreases in the range of 12% when they are in the late stages of
              gestation.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              COST-EFFECTIVE A farm animal capacity to take in the bulky feed is
              reduced due to the space that calves her in her abdominal cavity.
              A cost-effective feeding program can be designed when rations are
              utilizing a Bale of starw as a significant portion of roughage
              source. One bundle of wheat starw can be used to feed multiple
              farm animals. Saremco International provide affordable wheat bhusa
              price in the market. Such things can use cereal grains, screening
              the pellets, or other product feeds to produce a highly
              cost-effective alternative to use a good quality straw. Here at
              Saremco International, we look upon all the factors to produce
              high quality animal forage either it is long wheat straw or Rhodes
              Grass Hay etc. The only thing that we have in mind is to produce
              the best quality cheap wheat straw for animals. So, you are
              browsing hay suppliers near me to buy bulk Wheat straws you can
              contact us.
            </p>
          </div>
          <img
            src="images\others\others-4.jpg"
            alt="images\others\others-4.jpg"
            className="col-span-1"
          />
        </div>
        <div className="grid grid-cols-2  items-center p-20">
          <img
            src="images\others\others-5.jpg"
            alt="images\others\others-5.jpg"
            className="col-span-1"
          />
          <div className="col-span-1 ml-5">
            <span className="font-extrabold text-5xl">LENTILS </span>
            {/* <span className="font-thin text-5xl">EXPORT AND PACKAGING </span> */}
            <p className="text-sm font-light text-stone-500 mt-3">
              Wheat Straw is used into the feeding program during the pregnant
              cows in their’ second-trimester it is very useful. In this stage,
              their requirements for protein and energy are way lower than late
              in pregnancy and during early lactation. Importers usually get
              bulk straws because bundle or bale of wheat straw can be used for
              a long period of time.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Their stage of maturity determines all the nutrients in the
              roughage of straw at the time of harvest. Generally, the earlier
              you harvest, the higher the energy and protein content will be in
              it. Digestibility and palatability will also be higher if you cut
              the crop earlier. You require two bails of hay to feed a cow for
              two weeks.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Others;
