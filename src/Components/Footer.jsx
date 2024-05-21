import "../Styles/Main.scss";

function Footer() {
  return (
    <>
      {/* Contact us section */}
      <section className="bg-blue-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              We love to hear from you!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Column 1: Contact Information */}
            <div>
              <img
                src="logos/linkstraders.png"
                className="text-xl font-semibold mb-4 "
              />
              <p className="text-gray-600 text-sm">
                LINKS TRADERS began its journey in 2004, we are agriculture
                based company and offering animal forage, fruits & vegetables
                from Pakistan at wide scale.
              </p>

              <p className="text-gray-600 text-sm">
                We are pleased to introduce ourselves as a Leading Exporter of
                Rhodes Grass Hay, Long Wheat Straw Hay, Corn Silage, Alfalfa
                Hay, Corn Cob Crush, Seasonal Straws, Fruits & Vegetables,
                Cereal and Grains.
              </p>
              <br />
              <p className="text-gray-600 text-sm">
                We have high-quality seasonal fruits at very reasonable export
                prices and packaging.
              </p>
            </div>

            {/* Column 2: Popular products */}
            <div className="ml-3 mr-3">
              <h3 className="text-xl font-semibold">POPULAR PRODUCTS</h3>
              <div className="mt-8">
                <h2 className="block text-md font-medium text-stone-700">
                  Animal Forage
                </h2>
                <p className="text-sm ml-2 mt-2 text-gray-600">
                  Rhodes Grass Hay, Alfalfa Hay, Corn Silage, Wheat Straw, Maize
                  (Yellow Corn)
                </p>
              </div>
              <div className="mt-8">
                <h2 className="block text-md font-medium text-stone-700">
                  Fruits & Vegitables
                </h2>
                <p className="text-sm ml-2 mt-2 text-gray-600">
                  Potatoes, Onions, Mandarin/Kinnow, Mangoes
                </p>
              </div>
              <div className="mt-8 ">
                <h2 className="block text-md font-medium text-stone-700">
                  Cereal & Grains
                </h2>
                <p className="text-sm ml-2 mt-2 text-gray-600">
                  Rice, Sesame Seeds, Other Cereals & Grains
                </p>
              </div>
            </div>

            {/* Column 4: Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">CONTACT DETAILS</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.656 9.128 8.438 9.879v-6.987H7.896v-2.892h2.542V9.689c0-2.514 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46H15.82c-1.24 0-1.624.771-1.624 1.563v1.864h2.775l-.444 2.892h-2.331v6.987C18.344 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 27-7 27-17 0-.26-.01-.52-.03-.78A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.616c0-1.337-.026-3.066-1.866-3.066-1.867 0-2.154 1.459-2.154 2.967v5.715h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.556 2.839-1.556 3.034 0 3.595 1.997 3.595 4.591v5.598z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 6.25a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zm0 1.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm4.95-.65a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
              <div className="mt-3">
                <h2 className="block text-md font-medium text-stone-700">
                  Head Office
                </h2>
                <p className="text-sm ml-2 mt-3 text-gray-600">
                  Office No. 4, Second Floor, Commercial Center, PCSIR Phase-ll,
                  Lahore, Pakistan.
                </p>
              </div>
              <div className="mt-3">
                <h2 className="block text-md font-medium text-stone-700">
                  Phone/Whatsapp
                </h2>
                <p className="text-sm ml-2 mt-3 text-gray-600">
                  +92-3164284774
                </p>
              </div>
              <div className="mt-3 ">
                <h2 className="block text-md font-medium text-stone-700">
                  Email Address
                </h2>
                <p className="text-sm ml-2 mt-3 text-gray-600">
                  m.affansalim@gmail.com
                </p>
              </div>
            </div>
            <br />
            <hr />
          </div>
          {/* Column 3: Address */}
          <div className="bg-white p-3 rounded-lg shadow ">
            <h3 className="text-xl font-semibold mb-4">OUR ADDRESS</h3>
            <p className="text-gray-600">123 Main Street</p>
            <p className="text-gray-600">DG Khan, Punjab, 54000</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.149873684781!2d74.32674017442652!3d31.54750124580323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b980c843c5%3A0x49372873b571821d!2sDG%20Khan%20Cement%20Company%20Ltd.!5e0!3m2!1sen!2s!4v1715925865972!5m2!1sen!2s"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
