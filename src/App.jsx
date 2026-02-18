import Navbar from './Portfolio/Navbar'
import About from './Portfolio/About'
import Tech from './Portfolio/Tech'
import Experience from './Portfolio/Experience'
import Education from './Portfolio/Education'
import Project from './Portfolio/Project'
import Contact from './Portfolio/Contact'
import Footer from './Portfolio/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Tech />
      <Experience />
      <Education />
      <Project />
      <Contact />
      <Footer />
      <div className="container mx-auto p-4">
        {/* Main Content will go here */}
      </div>
    </>
  )
}

export default App
