import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function HeroSection() {
  return (
    <div
      style={{ backgroundImage: "url('/bg-image.svg')" }}
      className={`
        ${inter.className}
        text-white
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        flex flex-col items-center justify-center
        px-4 text-center py-32
      `}
    >
      {/* Heading */}
      <div className="font-semibold text-5xl leading-tight space-y-4 mb-8">
        <p>Crush Your Goals,</p> 
        <p>One Sprint at a Time.</p>
      </div>

      {/* Description */}
      <div className="space-y-4 md:text-lg text-gray-200 leading-relaxed max-w-xl mb-12">
        <p className="text-sm">
          Stay focused, beat procrastination, and study with purpose together.
        </p>
        <p className="text-sm">
          Join live sprints, track progress, and turn study time into power sessions.
        </p>
      </div>

      {/* CTA Button */}
      <div>
        <button className="cursor-pointer
         px-6 py-3 w-44 rounded-full bg-gradient-to-r from-[#E5CBD6] to-[#BAD1F7] text-[#101010] hover:opacity-90 transition">
          Join Now
        </button>
      </div>
    </div>
  )
}
