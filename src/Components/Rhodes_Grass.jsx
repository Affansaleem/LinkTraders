import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Styles/RhodesGrass.scss";
import { useEffect, useState } from "react";

function Rhodes_Grass() {
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
          <img src="images/rhodes-grass.png" alt="rhodes-grass.png" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              BEST HARVEST
            </p>
            <h1 className="font-bold text-6xl">RHODES GRASS HAY</h1>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20 mx-20">
          <div className="col-span-1 mx-10">
            <span className="font-extrabold text-5xl">ABOUT </span>
            <span className="font-thin text-5xl">RHODES GRASS</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Rhodes grass in Pakistan or Chloris gayana is usually a
              summer-growing, stoloniferous perennial, in which runners provide
              exceptional soil cover for erosion control. It is an important
              tropical grass widespread in tropical and subtropical countries
              like Pakistan, India, and Bangladesh.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              This grass is a useful forage for pasture and hay and is very
              productive. This grass is high in quality when young. Rhodes grass
              export from Pakistan is primarily a useful forage of high quality.
              This increases the quality of Rhodes grass cultivation in Pakistan
              and Rhodes grass yield per acre in Pakistan.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Pakistan Rhodes grass exporters are now becoming one of the
              largest Rhodes grass exporters all over the globe. The quality of
              this grass that you can find in Pakistan is better than in other
              countries. Rhodes grass seed suppliers are very difficult to find
              which tend to defecate Rhodes grass price in pakistan.
            </p>
          </div>
          <img
            src="images/rhode.png"
            alt="scientist.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1">
            <span className="font-extrabold text-5xl">ALL </span>
            <span className="font-thin text-5xl">NATURAL</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              We believe in purity. Our company doesn’t want your farm animals
              to feed on anything which does not live up to the standards. We
              are also growing boma Rhodes grass hay in its own katambora Rhode
              grass naturally at our farms. Here are a number of benefits
              associated with growing Rhodes Grass Pakistan naturally. A few of
              them mentioned below:
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              First, in the list, the crop only needs to be cultivated as soon
              as its ready, depending upon the climate of the region and seeds.
              It serves farmers in regions such as Pakistan that grow more crops
              depending upon different fertilizers, machinery, land preparations
              on time, water distribution, and pesticides. We also deal in Rhode
              grass silage.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Here at Saremco is one of the best Rhodes grass suppliers in
              Pakistan because We believe in quality. Our approach toward Rhodes
              grass export is to serve the best.
            </p>
          </div>
          <img
            src="images/rhodes-stock.jpg"
            alt="rhodes-stock.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <img
            src="images/rhodes-hay.jpg"
            alt="rhodes-stock.jpg"
            className="col-span-1"
          />
          <div className="col-span-1 ml-3">
            <span className="font-extrabold text-5xl">MODERN </span>
            <span className="font-thin text-5xl">FARMING</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Finally, as there are around 8 cuts of Rhodes Grass all through
              the months of summer if you play your cards right. This grass
              should be harvested every 20 to 25 days. If farmers don’t want to
              abrupt profits and income for their struggles. Rhodes grass for
              goats is another market to explore.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Modern methods take care of all these things. Our farms use the
              imported hybrid seeds of this grass, and also uses the
              ultra-modern harvesting machinery as provided by Farm Dynamics in
              Pakistan. Here are some parts of our modern processing that
              includes modern technology
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              A proper search of Location: <br /> Planting <br /> Product growth
              enhancement: <br /> Target Market: <br /> Cultivation Procedure{" "}
              <br />
              Land Preparation: <br /> Seed Sowing: <br /> Harvesting: <br />{" "}
              Bale Making: Storage and Marketing Export
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mr-3">
            <span className="font-extrabold text-5xl">FROM OUR </span>
            <span className="font-thin text-5xl">OWN FARMS</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Our mombasa grass in Pakistan grows in time and provides cover
              within 3 months of sowing. We Use it as a cover crop that improves
              soil structure, water infiltration in the soil, water-holding
              capacity, and its development lowers soil temperature during
              summer. We produce all of our Rhodes grass hay naturally without
              using any harmful chemical substances. Being Rohdes grass supliers
              we are emerging fast.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              The pesticides that we use are tilt toward more natural substance
              than synthetic ones. Our Rhodes grass hay for horses is one of the
              best you will find in the market without any chemical impurities.
              Rhodes grass demand is increasing day by day. It has Low oxalate
              concentrations that make Rhodes grass a valuable pasture grass for
              horses.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              In Pakistan, we use clippings that were used to make mulch and
              protect soil from erosion with particular Rhodes grass hay
              analysis. It makes a valuable seedbed for different horticultural
              crops such as zucchini, bulb onions, and eggplant. It provides
              organic and Chemical-free matter and protects it from wind and
              sun.
            </p>
          </div>
          <img
            src="images/our-rhodes.png"
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
              We provide the services with customized packing as per customer's
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

export default Rhodes_Grass;
