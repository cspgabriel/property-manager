import { Header } from '@/components/Header'
import { PortalSwitch } from '@/components/PortalSwitch'
import { Hero } from '@/components/Hero'
import { PartnerLogos } from '@/components/PartnerLogos'
import { Calculator } from '@/components/Calculator'
import { ValueProps } from '@/components/ValueProps'
import { MarketResults } from '@/components/MarketResults'
import { Testimonials } from '@/components/Testimonials'
import { MidCTA } from '@/components/MidCTA'
import { Services } from '@/components/Services'
import { Advantages } from '@/components/Advantages'
import { Scenarios } from '@/components/Scenarios'
import { FAQ } from '@/components/FAQ'
import { Neighborhoods } from '@/components/Neighborhoods'
import { OtherCities } from '@/components/OtherCities'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <PortalSwitch />
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <Calculator />
        <ValueProps />
        <MarketResults />
        <Testimonials />
        <MidCTA />
        <Services />
        <Advantages />
        <Scenarios />
        <FAQ />
        <Neighborhoods />
        <OtherCities />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
