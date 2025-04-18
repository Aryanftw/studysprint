import Navbar from "./components/Navbar"
import HeroSection from "./components/Hero"
import Footer from "./components/Footer"
export default function LandingPage(){
  return(
    <div className="min-h-screen w-screen bg-[#01010a]">
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}