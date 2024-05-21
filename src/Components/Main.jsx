import Carousel from "./Reusable/Carousel";
import Card from "./Reusable/Card";
import "../Styles/Main.scss";
import { useEffect, useState } from "react";
import Footer from "./Footer";

const Main = () => {
  const reviews = [
    {
      quote: `"Absolutely love this product! It's made my life so much easier.⭐",
      author: Sarah Smith`,
    },
    {
      quote: `"This is hands down the best service I've ever used. Highly recommended!🤩",
      author: John Doe`,
    },
    {
      quote: `"I can't believe how great this app is. It's a game changer!",
      author: Emily Johnson`,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
      <Carousel />
      <div className="relative h-screen pt-20">
        <video
          className="absolute top-0 left-0 w-full max-h-screen object-cover"
          src="Videos/video.mp4"
          autoPlay
          muted
          loop
        />

        <div className="relative z-10">
          <div className="flex justify-center gap-6">
            <Card
              name="FRESH ONIONS FROM PAKISTAN"
              imageSrc="images/onions.jpg"
              description="Saremco International farms are a registered and certified farming association in producing and exporting high quality Red Onions from Pakistan. We deliver globally best quality of Red Onions, which we grow on our farms organically."
            />
            <Card
              name="FRESH ORANGES FROM PAKISTAN"
              imageSrc="images/mandarin.png"
              description="Sweet and juicy mandarin make a tasty feast and offer many health benefits. Saremco International is trading this exotic food all around the world for over the last 16 years. We guarantee best Mandarin Fruit with freshness and quality."
            />
            <Card
              name="FRESH POTATOES FROM PAKISTAN"
              imageSrc="images/potatoes.jpg"
              description="Links Traders utilizes best resource for water washing facility in Pakistan and advanced washed potato trade in different countries. We offer different varieties of potatoes including lad rosetta and mozika with best quality guarantee."
            />
          </div>
          <div className="flex justify-center items-center text-white font-bold text-5xl mt-8">
            <div className="hollow-text">
              AGRICULTURE PRODUCTS <br /> EXPORTER IN PAKISTAN
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center p-4 m-10">
        <div className="flex w-1/3 uppercase font-bold text-6xl">
          <div>
            <span className="font-extrabold">ABOUT Links Traders</span> <br />
            <span className="font-thin">MISSION & VISION</span>
            <br />
            <button className="mt-4 text-sm border border-gray-400 rounded-full p-2 hover:p-4 hover:font-bold transition-all hover:bg-blue-400 hover:text-white hover:border-gray-600  duration-300">
              MORE ABOUT LINK TRADERS
            </button>
          </div>
        </div>

        <div className="flex w-1/3 justify-center">
          <img src="images/wheat.png" alt="wheat.png" className="rounded-md " />
        </div>

        <div className="flex w-1/3 text-gray-400 text-md">
          Links Traders has been actively involved in exporting various
          commodities & animal forage worldwide since 2004. <br /> We ensure
          high quality of chemical-free agricultural products from Pakistan.
        </div>
      </div>
      {/* Our Partners */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Our Premium Partners</h2>
          <div className="overflow-hidden relative">
            <div className="flex items-center logo-slider">
              <div className="mx-6">
                <img
                  src="partners/etrade.png"
                  alt="Brand 1"
                  className="h-24 w-auto"
                />
              </div>
              <div className="mx-8">
                <img
                  src="partners/etradepakistan-logo.png"
                  alt="Brand 2"
                  className="h-24 w-auto"
                />
              </div>
              <div className="mx-8">
                <img
                  src="partners/saremco-group.png"
                  alt="Brand 3"
                  className="h-24 w-auto"
                />
              </div>
              <div className="mx-8">
                <img
                  src="partners/yeseng.png"
                  alt="Brand 4"
                  className="h-24 w-auto"
                />
              </div>
              <div className="mx-8">
                <img
                  src="partners/army.png"
                  alt="Brand 1"
                  className="h-24 w-auto"
                />
              </div>
              <div className="mx-8">
                <img
                  src="partners/fauji.png"
                  alt="Brand 2"
                  className="h-24 w-auto"
                />
              </div>
              <div className="mx-8">
                <img
                  src="partners/isi.png"
                  alt="Brand 3"
                  className="h-24 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <div className="flex justify-center  m-8">
        <span className="font-extrabold text-4xl text-stone-700">
          PEOPLE SAY
        </span>
        <span className="font-extralight text-4xl text-stone-700">
          ABOUT US
        </span>
      </div>
      <div className="m-6 p-16 h-full w-full reviews-carousel relative overflow-hidden bg-white rounded-lg">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-500 ${
              index === currentSlide
                ? "opacity-100 ease-in-out"
                : "opacity-0 translate-x-full"
            }`}
          >
            <blockquote className="quote text-center p-4">
              <p className="text-gray-800 font-serif italic">{review.quote}</p>
              <footer className="text-gray-600 font-semibold">
                - {review.author}
              </footer>
            </blockquote>
          </div>
        ))}
        <div className="dot-slider absolute bottom-0 left-0 right-0 flex justify-center mt-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`dot bg-gray-400 rounded-full w-2 h-2 mx-1 cursor-pointer ${
                index === currentSlide ? "bg-blue-400" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 p-12">
        <div className="col-span-2 ">
          <span className="text-5xl font-extrabold">AGRICULTURE</span>
          <span className="text-5xl font-extralight"> PRODUCTS</span>
          <br />
          <br />
          <div className="text-sm font-thin w-full">
            Links Traders specializes in the production and trading of
            agricultural products worldwide. We have a range of agriculture
            products which we harvest from our own farms majorly and handle them
            carefully till delivery to our clients premises.
          </div>
          <br />
          <button className="mt-1 text-sm border border-gray-400 rounded-full p-2 hover:p-4 hover:font-bold transition-all hover:bg-blue-400 hover:text-white hover:border-gray-600  duration-300">
            AGRICULTURE PRODUCTS
          </button>
        </div>
        <div className="col-span-1 bg-gray-400 text-center grid-item rounded-3xl">
          <div className="relative h-full flex flex-col items-center justify-center rounded-full group">
            <div className="relative">
              <img
                src="images/mandarin.png"
                alt="Item 2"
                className="object-cover rounded-3xl transition-all"
              />
              <div className="absolute inset-0 bg-lightBlue-500 opacity-0 rounded-3xl group-hover:opacity-100 transition-all"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-start pl-3">
              <span className="text-white font-light text-3xl">
                FRESH MANDARIN
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-gray-400 text-center grid-item rounded-3xl overflow-hidden">
          <div className="relative h-full w-full flex flex-col items-center justify-center group">
            <img
              src="images/potatoes.jpg"
              alt="Item 2"
              className="object-cover h-full w-full transition-all duration-300 ease-in-out rounded-3xl"
            />
            <div className="absolute inset-0 bg-lightBlue-500 opacity-0 rounded-3xl group-hover:opacity-80 transition-opacity duration-300 ease-in-out"></div>
            <div className="absolute inset-0 flex items-center justify-start pl-3">
              <span className="text-white font-light text-3xl">
                FRESH POTATOES
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-gray-400 text-center grid-item rounded-3xl">
          <div className="relative h-full flex flex-col items-center justify-center rounded-full">
            <img
              src="images/animal.jpg"
              alt="animalforage"
              className="object-cover h-full w-full transition-all duration-300 ease-in-out rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-3">
              <span className="text-white font-light text-3xl">
                ANIMAL FORAGE
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-gray-400 text-center grid-item rounded-3xl">
          <div className="relative h-full flex flex-col items-center justify-center rounded-full">
            <img
              src="images/corn.png"
              alt="Item 2"
              className="object-cover h-full w-full transition-all duration-300 ease-in-out rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-3">
              <span className="text-white font-light text-3xl">
                CORN SILAGE
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-gray-400 text-center grid-item rounded-3xl">
          <div className="relative h-full flex flex-col items-center justify-center rounded-full">
            <div className="absolute inset-0 flex items-center justify-center pl-3">
              <span className="text-white font-extrabold text-3xl text-center">
                WIDE RANGE OF PRODUCTS
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-gray-400 text-center grid-item rounded-3xl">
          <div className="relative h-full flex flex-col items-center justify-center rounded-full">
            <img
              src="images/turmeric.jpg"
              alt="turmeric.jpg"
              className="object-cover h-full w-full transition-all duration-300 ease-in-out rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-3">
              <span className="text-white font-light text-3xl">
                TURMERIC POWDER
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-gray-400 text-center grid-item rounded-3xl">
          <div className="relative h-full flex flex-col items-center justify-center rounded-full">
            <img
              src="images/grains.jpg"
              alt="Grains.jpg"
              className="object-cover h-full w-full transition-all duration-300 ease-in-out rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-3">
              <span className=" font-light text-white text-3xl">
                GRAINS & CEREALS
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-gray-400 text-center grid-item rounded-3xl">
          <div className="relative h-full flex flex-col items-center justify-center rounded-full">
            <img
              src="images/sesame.jpg"
              alt="Item 2"
              className="object-cover h-full w-full transition-all duration-300 ease-in-out rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-3">
              <span className="text-white font-light text-3xl">GRAINS</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
