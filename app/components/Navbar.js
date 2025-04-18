'use client'
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
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

  return (
    <>
      <div className={`hidden md:flex px-8 lg:px-16 text-white h-16 w-auto items-center justify-between ${inter.className} py-12`}>
        <div className="font-semibold text-xl  hover:text-gray-300 transition duration-100 ease-in-out">
          StudySprint
        </div>
        
        <div className="text-sm px-36 font-light relative group hover:text-gray-300 transition duration-100 ease-in-out">
        <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      </div>

      <div className={`md:hidden px-6 text-white flex items-center justify-between ${inter.className} py-8`}>
        <div className="font-semibold text-xl">
          StudySprint
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <Link 
            href="/" 
            className="text-2xl hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/auth" 
            className="text-2xl hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Sign-up
          </Link>
          
        </div>
      )}
    </>
  )
}