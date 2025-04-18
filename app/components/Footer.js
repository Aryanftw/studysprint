import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Footer() {
  return (
    <footer className={`${inter.className} bg-[#01010a] text-white py-28 px-4 sm:px-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Contact Info - Centered */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-medium">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>+91 9408744422</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>ap890383@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links - Centered */}
          <div className="space-y-4 text-center">
            <h4 className="text-lg font-medium">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <Link 
                href="https://instagram.com/aryan._.ftw" 
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/aryan-parmar-90b10a324/" 
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">© 2025 StudySprint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}