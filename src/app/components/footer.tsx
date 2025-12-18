/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-8" id="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Depuis sa création en 2012,EASY-TECH SERVICES SARL est une structure
            spécialisée dans les services personnalisés en réseau,
            télécommunication, sécurité, système, vidéosurveillance, A l'écoute
            constante des entreprises,particuliers et des technologies ,
            EASY-TECH SERVICES SARL préconise des solutions innovantes et
            apporte les compétences nécessaires à leur mise en place.
          </p>
          {/* Social Media Section */}
          <div className="px-2 py-6">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100089144379518"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 3.808s-.012 2.74-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-3.808.06s-2.74-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-3.808s.012-2.74.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <span className="mr-2">📞</span> Phone: (+237) 653 02 16 08 / 699
              84 94 30
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span> Email: info@easy-techsarl.com
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1">🕒</span>{" "}
              <div>Open: Mon - Fri, 8 AM - 5 PM</div>
            </li>
          </ul>
        </div>

        {/* Comment/Subscribe Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
          <form>
            <input
              type="email"
              placeholder="Your email for newsletter"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-primary mb-4"
            />
            <textarea
              placeholder="Your comment..."
              rows={3}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-primary mb-4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d845.9935909628211!2d9.696469999999993!3d4.035325999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDInMDcuMiJOIDnCsDQxJzQ3LjMiRQ!5e1!3m2!1sen!2sus!4v1762867351599!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Easy-tech service sarl. All Rights
        Reserved.
      </div>
    </footer>
  );
}
