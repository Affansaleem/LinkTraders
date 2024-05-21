import "../Styles/Contactus.scss"; // Import CSS file for styling
import Footer from "./Footer";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contactus = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_9zii408",
        "template_m0bfzki",
        templateParams,
        "c_t_7CKcNMin7nOgW"
      )
      .then((result) => {
        toast.success("Email Sent Successfully");
      })
      .catch((error) => {
        toast.error("Failed to send email");
      });
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <div className="contact-us-container">
        <div className="background-image">
          <img src="images/farm.jpg" alt="farm.jpg" />
          <div className="content">
            <p className="text-6xl" style={{ fontWeight: 100 }}>
              LINKS TRADERS
            </p>
            <h1 className="font-bold text-6xl">Contact Us</h1>
            <p className="font-semibold mt-4 text-md">
              Your inquiries are important to us. Link Traders Contact details
              will guide you for further inquiries.
            </p>
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
        <div className="grid grid-cols-3 gap-36 ">
          <div className="text-center m-2">
            <span className="font-bold text-xl">PAKISTAN OFFICE</span>
            <br />
            <span className="text-center text-stone-500 text-lg">
              Office No. 4, 2nd Floor, Commercial Center PCSIR Phase II, Lahore,
              Pakistan.
            </span>
          </div>

          <div className="text-center m-2">
            <span className="font-bold text-xl">PHONE/WHATSAPP</span>
            <br />
            <span className="text-center text-stone-500 text-lg">
              +92-3057157979
              <br />
              +92-3164284774
            </span>
          </div>
          <div className="text-center m-2">
            <span className="font-bold text-xl">EMAIL</span>
            <br />
            <span className="text-center text-stone-500 text-lg">
              m.affansalim@gmail.com
            </span>
          </div>
        </div>
        {/* Contact us form div */}
        <div className="p-8 bg-[#344C64] rounded-md m-3 ">
          <h2 className="text-4xl text-white font-semibold mb-4">
            Get In Touch
          </h2>
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-white"
              >
                Name
              </label>
              <input
                placeholder="John Wick"
                type="text"
                id="name"
                name="name"
                className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email
              </label>
              <input
                placeholder="xyz@gmail.com"
                type="email"
                id="email"
                name="email"
                className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-white"
              >
                Phone No.
              </label>
              <input
                placeholder="+92-3*********"
                type="number"
                id="phone"
                name="phone"
                className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white"
              >
                Message
              </label>
              <textarea
                placeholder="Message...."
                id="message"
                name="message"
                rows="4"
                className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-950 hover:font-bold transition-all duration-300 focus:outline-none focus:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
        <hr className="h-3" />
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
