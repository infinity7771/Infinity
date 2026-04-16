import { Loader } from "@/components/infinity/loader"
import { CustomCursor } from "@/components/infinity/custom-cursor"
import { MusicPlayer } from "@/components/infinity/music-player"
import { Navbar } from "@/components/infinity/navbar"
import { HeroSection } from "@/components/infinity/sections/hero-section"
import { AboutSection } from "@/components/infinity/sections/about-section"
import { FeaturesSection } from "@/components/infinity/sections/features-section"
import { GladsSection } from "@/components/infinity/sections/glads-section"
import { TopsSection } from "@/components/infinity/sections/tops-section"
import { EcosystemSection } from "@/components/infinity/sections/ecosystem-section"
import { FinalCtaSection } from "@/components/infinity/sections/final-cta-section"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#020617] text-white">
      <Loader />
      <CustomCursor />
      <MusicPlayer />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <GladsSection />
      <TopsSection />
      <EcosystemSection />
      <FinalCtaSection />
    </main>
  )
}
