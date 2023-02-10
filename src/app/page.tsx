import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Team from './Team'
import Work from './Work'
import Feedback from './Feedback'
import Contact from './Contact'
import LatestBlogs from './LatestBlogs'
import Map from './Map'
import Clients from './Clients'
import Footer from './Footer'

export default function Home() {
  return (
    <main>
      <div className='bg-Dark1'>
        <section id='hero' className='max-w-[1340px] mx-auto'>
          <Hero />
        </section>
      </div>

      <div className='bg-Dark'>
        <section id='about' className='max-w-[1340px] mx-auto'>
          <About />
        </section>
      </div>

      <div className='bg-Dark1'>
        <section id='experience' className='max-w-[1340px] mx-auto'>
          <Experience />
        </section>
      </div>

      <div className='bg-Dark'>
        <section id='team' className='max-w-[1340px] mx-auto'>
          <Team />
        </section>

        <section id='work' className='max-w-[1340px] mx-auto'>
          <Work />
        </section>
      </div>

      <div className='bg-Dark1'>
        <section id='feedback' className='max-w-[1340px] mx-auto'>
          <Feedback />
        </section>
        
      </div>

      <div className='bg-Dark'>
      <section id='feedback' className='max-w-[1340px] mx-auto'>
          <LatestBlogs />
        </section>
        
        <section id='feedback' className='max-w-[1340px] mx-auto'>
          <Contact />
          <Map />
          <Clients />
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    </main>
  )
}
