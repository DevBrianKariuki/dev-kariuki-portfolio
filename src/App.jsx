import { Hero, Navbar, About, Contact, Projects, Footer } from './Components'
import styles from './styles'
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    <Analytics />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
