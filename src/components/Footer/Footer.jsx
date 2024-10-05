import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

//useless comment

function Footer() {
  return (
    <section className="relative bottom-0 w-full overflow-hidden py-6 bg-[#B17457] border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; 2023 DevUI. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item) => (
                  <li key={item} className="mb-2">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-300"
                      to="/"
                      aria-label={item}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                {["Account", "Help", "Contact Us", "Customer Support"].map((item) => (
                  <li key={item} className="mb-2">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-300"
                      to="/"
                      aria-label={item}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item) => (
                  <li key={item} className="mb-2">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-300"
                      to="/"
                      aria-label={item}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
