import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
export default function LandingPage(){
  console.log(require.resolve("./components/HeroSection")); 

  return(
    <div className="min-h-screen w-screen bg-[#01010a]">
      <Navbar/>
      <HeroSection/>      <Footer/>
    </div>
  )
}