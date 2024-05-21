import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Styles/Wheat_Straw.scss";
import { useEffect, useState } from "react";

function Wheat_Straw() {
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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <div className="background-image">
          <img src="images/straw.jpg" alt="rhodes-grass.png" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              BEST HARVEST
            </p>
            <h1 className="font-bold text-6xl">WHEAT STRAW</h1>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20 mx-20">
          <div className="col-span-1 mx-10">
            <span className="font-extrabold text-5xl">ABOUT </span>
            <span className="font-thin text-5xl">WHEAT STRAW HAY</span>
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
            src="images/straw-1.png"
            alt="scientist.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mr-5">
            <span className="font-extrabold text-5xl">WHEAT STRAW </span>
            <span className="font-thin text-5xl">QUALITY</span>
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
            src="images/straw-2.png"
            alt="rhodes-stock.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <img
            src="images/straw-3.png"
            alt="rhodes-stock.jpg"
            className="col-span-1"
          />
          <div className="col-span-1 ml-5">
            <span className="font-extrabold text-5xl">WHEAT STRAW & </span>
            <span className="font-thin text-5xl">ITS USES</span>
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
            <span className="font-extrabold text-5xl">PROCESS & </span>
            <span className="font-thin text-5xl">GRINDING</span>
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
            src="images/straw-4.png"
            alt="our-rhodes.png"
            className="col-span-1"
          />
        </div>
        <div className="rhodes-grass-info">
          <div className="section">
            <h2 className="section-title">QUALITY</h2>
            <p>
              We export the A+ quality of Rhodes Grass with controlled moisture.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">PACKING</h2>
            <p>
              We provide the services with customized packing as per customers
              requirement.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">SPECIFICATIONS</h2>
            <div className="grid">
              <div className="technical-spec">
                <h3 className="subsection-title">Technical Specification</h3>
                <table>
                  <tbody>
                    <tr>
                      <td className="label">Product Name</td>
                      <td>Rhodes Grass</td>
                    </tr>
                    <tr>
                      <td className="label">Scientific Name</td>
                      <td>Chloris Gayana</td>
                    </tr>
                    <tr>
                      <td className="label">Type</td>
                      <td>Hay</td>
                    </tr>
                    <tr>
                      <td className="label">Grass Variety</td>
                      <td>Finecut</td>
                    </tr>
                    <tr>
                      <td className="label">Place of Origin</td>
                      <td>Pakistan</td>
                    </tr>
                    <tr>
                      <td className="label">Color</td>
                      <td>Lush Green</td>
                    </tr>
                    <tr>
                      <td className="label">Moisture (%)</td>
                      <td>9 – 10 % Max</td>
                    </tr>
                    <tr>
                      <td className="label">Crude Protein (%)</td>
                      <td>12 %</td>
                    </tr>
                    <tr>
                      <td className="label">Admixture (%)</td>
                      <td>0.0 % (None)</td>
                    </tr>
                    <tr>
                      <td className="label">Model Name/number</td>
                      <td>Saremco Rhodes grass #001</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="nutritional-spec">
                <h3 className="subsection-title">Nutritional Specification</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Components</th>
                      <th>Percentage (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Crude Fibre</td>
                      <td>29.0 – 30.0 %</td>
                    </tr>
                    <tr>
                      <td>Ash</td>
                      <td>6.0 – 9.0 % (Max)</td>
                    </tr>
                    <tr>
                      <td>Nitrogen Free Extract</td>
                      <td>50.0 – 53.0 %</td>
                    </tr>
                    <tr>
                      <td>Ether Extract</td>
                      <td>1.30 – 1.7 (Max)</td>
                    </tr>
                    <tr>
                      <td>Total Aflatoxin(ppb)</td>
                      <td>10.0 %</td>
                    </tr>
                    <tr>
                      <td>Total Endophyte (ppb)</td>
                      <td>0.0 % (Endophyte free)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="packaging-details">
              <h3 className="subsection-title">Packaging details</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="label">Minimum Order Requirement (MOQ)</td>
                    <td>20 tons</td>
                  </tr>
                  <tr>
                    <td className="label">Payment Options</td>
                    <td>LC/TT</td>
                  </tr>
                  <tr>
                    <td className="label">Packaging Style</td>
                    <td>bales or as per customer requirement</td>
                  </tr>
                  <tr>
                    <td className="label">Square Field Bale</td>
                    <td>250 – 300 kg/bale</td>
                  </tr>
                  <tr>
                    <td className="label">Double Compressed bale</td>
                    <td>28 – 30 kg/bale</td>
                  </tr>
                  <tr>
                    <td className="label">Container Loading Weight</td>
                    <td>16 – 22 M Ton / Container</td>
                  </tr>
                  <tr>
                    <td className="label">Container HQ (ft)</td>
                    <td>40 feet</td>
                  </tr>
                  <tr>
                    <td className="label">Bales per Container</td>
                    <td>450 – 600 bales (depends on the bale type)</td>
                  </tr>
                  <tr>
                    <td className="label">Number of Bales per container</td>
                    <td>As per the Container Weight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wheat_Straw;
