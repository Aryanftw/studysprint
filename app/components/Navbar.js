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
              <span className="bg-gradient-to-r from-[#E5CBD6] to-[#BAD1F7] bg-clip-text text-transparent group-hover:scale-95 transition-transform duration-300">
                StudySprint
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              
              
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
              
              
            </div>
          </SignedOut>
        </div>
      )}
    </>
  )
}