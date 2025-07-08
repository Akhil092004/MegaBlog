import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-t border-slate-700">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <Link to="/" className="group flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                    <Logo width="80px" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      CC
                    </h2>
                    <p className="text-gray-400 text-sm">Where stories come alive</p>
                  </div>
                </Link>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Create, share, and discover amazing stories. Join our community of writers and readers from around the world.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {[
                  { icon: '🐦', label: 'Twitter', href: '#' },
                  { icon: '📘', label: 'Facebook', href: '#' },
                  { icon: '📸', label: 'Instagram', href: '#' },
                  { icon: '💼', label: 'LinkedIn', href: '#' }
                ].map((social) => (
                  <Link
                    key={social.label}
                    to={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-sm text-gray-400">
                  &copy; 2024 CC. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {["About Us", "Features", "Pricing", "Careers", "Press Kit"].map((item) => (
                <li key={item}>
                  <Link
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    to="/"
                    aria-label={item}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Support
            </h3>
            <ul className="space-y-3">
              {["Help Center", "Contact Us", "Community", "Documentation", "API"].map((item) => (
                <li key={item}>
                  <Link
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    to="/"
                    aria-label={item}
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
              <Link to="/" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
              <Link to="/" className="hover:text-white transition-colors duration-300">Licensing</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>by Akhil Jain</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
}

export default Footer;