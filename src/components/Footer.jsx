import React from "react";
import { Send } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-[#003580] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-3xl text-[#003580] mb-4">
              Travel Journal
            </h3>
            <p className="text-gray-600 text-m">
              Capture and share your travel memories with fellow adventurers
              around the world.
            </p>
          </div>

          <div className="px-10">
            <h4 className="text-xl font-medium text-[#003580] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2  text-gray-600">
              <li>
                <a href="/" className="hover:text-[#003580] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/explore"
                  className="hover:text-[#003580] transition-colors"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-[#003580] transition-colors"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div className="px-2">
            <h4 className="text-xl font-medium text-[#003580] mb-4 ">
              Connect
            </h4>
            <ul className="space-y-2  text-gray-600">
              <li>
                <a href="#" className="hover:text-[#003580] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003580] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003580] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-1">
            <h3 className="text-2xl font-bold mb-2 pl-0.5 w-50 text-[#003580]">
              Stay Updated!
            </h3>
            <p className="text-gray-500 mb-4 w-60">
              {" "}
              Subscribe to our newsletter for the latest articles and updates.
            </p>
            <form className="flex gap-2 pr-2">
              <input
                type="email"
                placeholder="Enter Your Email."
                className="flex-grow rounded-md pl-2 outline bg-[#003580] text-white placeholder-white focus:ring-purple-500 focus:border-purple-500"
              />
              <button
                type="submit"
                className="bg-[#003580] text-white py-2 px-2  rounded-md shadow-sm transition-colors duration-200"
              >
                <Send className="w-5 h-5 cursor-pointer"></Send>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-[#003580] pt-6 mt-8">
          <p className="text-center text-sm text-[#003580]">
            © {new Date().getFullYear()} Travel Journal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
