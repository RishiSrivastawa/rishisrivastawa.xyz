import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Navigation />

      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}
