import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stack from '@/components/Stack'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certs from '@/components/Certs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
