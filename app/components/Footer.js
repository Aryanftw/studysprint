import { Instagram, Linkedin, Mail, Phone, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Footer() {
  return (
    <footer className={`${inter.className} bg-[#01010a] text-white py-20 sm:py-28 px-6 sm:px-8 border-t border-gray-900`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6 text-center md:text-left">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">StudySprint</h3>
              <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
                Transforming study sessions into productive sprints for students worldwide.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4">
              <Link 
                href="https://instagram.com/aryan._.ftw" 
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/aryan-parmar-90b10a324/" 
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 hover:text-white transition-all duration-300"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-white transition-colors duration-300 inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors duration-300 inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-300 inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-300 inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors duration-300 group">
                <div className="p-2 rounded-full bg-gray-900 group-hover:bg-gray-800 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 9408744422</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors duration-300 group">
                <div className="p-2 rounded-full bg-gray-900 group-hover:bg-gray-800 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span>ap890383@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for tips and updates</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#E5CBD6] to-[#BAD1F7] text-[#01010a] font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; 2025 StudySprint. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}