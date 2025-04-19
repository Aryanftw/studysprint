
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import SyncUser from './components/SyncUser'
export default function LandingPage() {
 
  return (
    <div className="min-h-screen w-screen bg-[#01010a] text-white">
      <SyncUser/>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}
