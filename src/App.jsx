import { Hero, Navbar, About, Contact, Projects, Footer } from './Components'
import styles from './styles'

function App() {

  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>

    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
