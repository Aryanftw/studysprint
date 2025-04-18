'use client'
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu, X, ChevronDown, Search, Bell } from "lucide-react"
import { useState, useEffect } from "react"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${inter.className} ${
          scrolled ? "bg-black/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-white flex items-center group">
              <span className="bg-gradient-to-r from-[#E5CBD6] to-[#BAD1F7] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                StudySprint
              </span>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link href="/features" className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300 relative group">
                Features
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <div className="relative group">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300 flex items-center"
                >
                  Resources
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none py-1">
                    <Link 
                      href="/blog" 
                      className="block px-4 py-2 text-sm text-white/80 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/guides" 
                      className="block px-4 py-2 text-sm text-white/80 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Study Guides
                    </Link>
                    <Link 
                      href="/webinars" 
                      className="block px-4 py-2 text-sm text-white/80 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Webinars
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300 relative group">
                Pricing
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link href="/about" className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300 relative group">
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            
            {/* Auth and User Actions */}
            <div className="flex items-center space-x-4">
              <button 
                aria-label="Search" 
                className="text-white/80 hover:text-white transition-colors duration-300 p-2"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <SignedIn>
                <button 
                  aria-label="Notifications" 
                  className="text-white/80 hover:text-white transition-colors duration-300 p-2 relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "border-2 border-white hover:border-[#BAD1F7] transition-colors duration-300"
                    }
                  }}
                />
              </SignedIn>
              
              <SignedOut>
                <div className="flex items-center space-x-2">
                  <SignInButton>
                    <button className="text-white/90 hover:text-white px-4 py-2 transition-colors duration-300 text-sm font-medium">
                      Sign In
                    </button>
                  </SignInButton>
                  
                  <SignUpButton>
                    <button className="bg-gradient-to-r from-[#E5CBD6] to-[#BAD1F7] text-[#01010a] font-medium px-4 py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-300">
                      Get Started
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between py-4">
            <Link href="/" className="font-bold text-xl text-white">
              <span className="bg-gradient-to-r from-[#E5CBD6] to-[#BAD1F7] bg-clip-text text-transparent">
                StudySprint
              </span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 p-6 animate-fadeIn">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-white"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <Link 
            href="/" 
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            href="/features" 
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          
          <Link 
            href="/resources" 
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          
          <Link 
            href="/pricing" 
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          
          <Link 
            href="/about" 
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          
          <SignedOut>
            <div className="flex flex-col space-y-4 items-center mt-4">
              <SignInButton>
                <button className="text-white border border-white/30 hover:bg-white/10 transition-colors duration-300 px-8 py-3 rounded-lg text-lg">
                  Sign In
                </button>
              </SignInButton>
              
              <SignUpButton>
                <button className="bg-gradient-to-r from-[#E5CBD6] to-[#BAD1F7] text-[#01010a] font-medium px-8 py-3 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300">
                  Get Started
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      )}
    </>
  )
}