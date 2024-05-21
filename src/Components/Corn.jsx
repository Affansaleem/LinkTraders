import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Styles/Corn.scss";
import { useEffect, useState } from "react";

function Corn() {
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
          <img src="images/corn-silage.jpg" alt="rhodes-grass.png" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              BEST HARVEST
            </p>
            <h1 className="font-bold text-6xl">CORN SILAGE</h1>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20 mx-20">
          <div className="col-span-1 mx-10">
            <span className="font-extrabold text-5xl">ABOUT </span>
            <span className="font-thin text-5xl">CORN SILAGE</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Corn silage is a high-quality forage of crop used on almost every
              dairy farm and beef cattle farms worldwide as best feeding straw
              for animals. Its popularity is due to the high amount yielding of
              a very digestible, best-quality energy crop. The ease of adapting
              it to mechanized harvesting and feeding is another plus point for
              this crop. Silage is one of the popular forages used for animal
              feed because of its digestibility and high energy. Many of the
              characteristics of this silage make it attractive for many
              livestock producers. It is an excellent forage for dairy cows.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Silage Export from Pakistan by Saremco International all over the
              world. We offer one of the best quality Corn silage in Pakistan.
              We offer the most reasonable corn silage prices for other
              exporters in the market.
            </p>
          </div>
          <img
            src="images/corn-about.png"
            alt="scientist.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1">
            <span className="font-extrabold text-5xl">HIGH YIELD </span>
            <span className="font-thin text-5xl">OF CORN</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              At Saremco International we make a detailed plan for the
              production of Corn silage. We are one of the best silage
              manufacturers in Lahore. It is an essential component to make
              silage corn efficient cropping system. Our cropping plan is based
              on forage dry matter requirements. It helps us a lot in
              harvesting, drying, storing, and chopping corn silage. It is one
              of the best strategies to produce premium quality silage to
              export.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Saremco plants silage corn seeds at the start of the season. We
              look after crops regularly and keep it safe from stress like
              drought, insects, or diseases. It helps us a lot to get a high
              yield.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              The crop gives livestock producers a high-yielding, relatively
              more consistent source of forage. The farm animals with a highly
              digestible require palatable feed. This hay is one of those farm
              animals feeds that produce more acres than any other crop grown in
              Pakistan.
            </p>
          </div>
          <img
            src="images/corn-2.png"
            alt="rhodes-stock.jpg"
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <img
            src="images/corn-3.png"
            alt="rhodes-stock.jpg"
            className="col-span-1"
          />
          <div className="col-span-1 ml-3">
            <span className="font-extrabold text-5xl">POPULATION & </span>
            <span className="font-thin text-5xl">GROWTH</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Saremco Desired plant population for silage is dependent on the
              productivity of the seed and the Soil. We choose both of these
              elements very carefully. Generally, the silage crops population
              should be around 2,000 to 4,000 plants per acre than the
              recommended amount for grain. It often results in the desired
              stand of 26,000 to 32,000 plants per acre on most soils at Saremco
              farms with the best corn silage harvest methods.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              We have higher plant populations in this range. It is best suited
              to the most productive soils. We use a two-year trial conducted in
              Pakistani Soil to indicate that silage yields are maximized at
              42,000 plants per acre. Still, the estimated yields/acre, whole
              Corn plant digestibility were maximized at 30,000 plants per acre
              by Saremco and provide less corn silage price in Pakistan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2  items-center p-20">
          <div className="col-span-1 mr-3">
            <span className="font-extrabold text-5xl">BUILDING & </span>
            <span className="font-thin text-5xl">STORING</span>
            <p className="text-sm font-light text-stone-500 mt-3">
              Our Corn silage Bundling and Packaging criteria are second to
              none. While packaging silage, we make sure that its nutrients
              don’t get wasted. At Saremco international, we bundle it in 80 KG
              round shape bale. After making bale are wrapped with plastic film,
              so its nutrients don’t get wasted. This Packaging technique makes
              it easy to transport and minimize any wastage.
            </p>
            <br />
            <p className="text-sm font-light text-stone-500">
              Storing Before exporting, we keep silage stored in our warehouses.
              Here it is stored at the proper temperature without any sun
              exposure. Saremco International Corn silage can be stored for up
              to 3 years.
            </p>
          </div>
          <img
            src="images/corn-4.png"
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

export default Corn;
