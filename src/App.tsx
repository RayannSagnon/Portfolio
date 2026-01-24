import './App.css'
import { useRef } from 'react'
import SplitText from './components/SplitText'
import eloquence from './assets/eloquence.jpg'
import parents from './assets/parents.JPG'
import montreal from './assets/montreal.jpg'
import diplome from './assets/diplome.jpg'
import team from './assets/team.jpg'
import falls from './assets/falls.png'
import kart from './assets/kart.JPEG'
import brevet from './assets/brevet.jpg'

function App() {
  const introAmRef = useRef<HTMLHeadingElement>(null)
  const introRayannRef = useRef<HTMLHeadingElement>(null)
  const heroHiRef = useRef<HTMLHeadingElement>(null)
  const heroThereRef = useRef<HTMLHeadingElement>(null)
  const computerRef = useRef<HTMLSpanElement>(null)
  const engineerRef = useRef<HTMLSpanElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const updateGradient = (element: HTMLElement | null) => {
      if (!element) return
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      element.style.setProperty('--mouse-x', `${x}px`)
      element.style.setProperty('--mouse-y', `${y}px`)
    }

    updateGradient(introAmRef.current)
    updateGradient(introRayannRef.current)
  }

  const handleHiThereMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const updateGradient = (element: HTMLElement | null) => {
      if (!element) return
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      element.style.setProperty('--mouse-x', `${x}px`)
      element.style.setProperty('--mouse-y', `${y}px`)
    }

    updateGradient(heroHiRef.current)
    updateGradient(heroThereRef.current)
  }

  const handleMouseLeave = () => {
    if (introAmRef.current) {
      introAmRef.current.style.setProperty('--mouse-x', '-9999px')
      introAmRef.current.style.setProperty('--mouse-y', '-9999px')
    }
    if (introRayannRef.current) {
      introRayannRef.current.style.setProperty('--mouse-x', '-9999px')
      introRayannRef.current.style.setProperty('--mouse-y', '-9999px')
    }
  }

  const handleHiThereMouseLeave = () => {
    if (heroHiRef.current) {
      heroHiRef.current.style.setProperty('--mouse-x', '-9999px')
      heroHiRef.current.style.setProperty('--mouse-y', '-9999px')
    }
    if (heroThereRef.current) {
      heroThereRef.current.style.setProperty('--mouse-x', '-9999px')
      heroThereRef.current.style.setProperty('--mouse-y', '-9999px')
    }
  }

  const handleEngineerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const updateGradient = (element: HTMLElement | null) => {
      if (!element) return
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      element.style.setProperty('--mouse-x', `${x}px`)
      element.style.setProperty('--mouse-y', `${y}px`)
    }

    updateGradient(computerRef.current)
    updateGradient(engineerRef.current)
  }

  const handleEngineerMouseLeave = () => {
    if (computerRef.current) {
      computerRef.current.style.setProperty('--mouse-x', '-9999px')
      computerRef.current.style.setProperty('--mouse-y', '-9999px')
    }
    if (engineerRef.current) {
      engineerRef.current.style.setProperty('--mouse-x', '-9999px')
      engineerRef.current.style.setProperty('--mouse-y', '-9999px')
    }
  }

  return (
    <div className="portfolio">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">
            <span className="logo-first">Rayann</span>
            <span className="logo-last">Sagnon</span>
          </div>
          <nav className="navbar-pill">
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - All Images and Text */}
      <section className="hero">
        <div className="hero-middle">
          <div className="hi-there-wrapper" onMouseMove={handleHiThereMouseMove} onMouseLeave={handleHiThereMouseLeave}>
            <SplitText 
              text="Hi"
              ref={heroHiRef}
              className="hero-hi interactive-text"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              duration={1.25}
              stagger={0.1}
              ease="power3.out"
              once={true}
              threshold={0.1}
            />
            <SplitText 
              text="There"
              ref={heroThereRef}
              className="hero-there interactive-text"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              duration={1.25}
              stagger={0.1}
              ease="power3.out"
              once={true}
              threshold={0.1}
            />
          </div>
          <div className="hero-left" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <h2 className="intro-am interactive-text" ref={introAmRef}>I AM</h2>
            <h2 className="intro-rayann interactive-text" ref={introRayannRef}>RAYANN</h2>
            <p className="intro-description">
              I am a Computer Engineering student passionate about building impactful digital solutions, blending software, AI, and design.
            </p>
          </div>

          {/* Collage Grid */}
          <div className="collage-wrapper">
            <div className="collage-grid">
              <img src={eloquence} alt="Portrait" className="col-item col-0" />
              <img src={parents} alt="img1" className="col-item col-1" />
              <img src={montreal} alt="img2" className="col-item col-2" />
              <img src={falls} alt="img3" className="col-item col-3" />
              <img src={brevet} alt="img4" className="col-item col-4" />
              <img src={diplome} alt="img5" className="col-item col-5" />
              <img src={team} alt="img6" className="col-item col-6" />
              <img src={kart} alt="img7" className="col-item col-7" />
            </div>
          </div>

          {/* Right Text */}
          <div className="hero-right" onMouseMove={handleEngineerMouseMove} onMouseLeave={handleEngineerMouseLeave}>
            <p className="specialization">
              Specialized in Front-End Development, UI/UX Design, <br />and Web Applications.
            </p>
            <h3 className="title-engineer">
              <span className="engineer-computer interactive-text" ref={computerRef}>COMPUTER</span>
              <span className="engineer-engineer interactive-text" ref={engineerRef}>ENGINEER</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="marquee">
          <div className="marquee-content">
            <span>PROBLEM SOLVING</span>
            <span className="dot">•</span>
            <span>TEAMWORK</span>
            <span className="dot">•</span>
            <span>COMMUNICATION</span>
            <span className="dot">•</span>
            <span>LEADERSHIP</span>
            <span className="dot">•</span>
            <span>INITIATIVE</span>
            <span className="dot">•</span>
            <span>CURIOSITY</span>
            <span className="dot">•</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span>PROBLEM SOLVING</span>
            <span className="dot">•</span>
            <span>TEAMWORK</span>
            <span className="dot">•</span>
            <span>COMMUNICATION</span>
            <span className="dot">•</span>
            <span>LEADERSHIP</span>
            <span className="dot">•</span>
            <span>INITIATIVE</span>
            <span className="dot">•</span>
            <span>CURIOSITY</span>
            <span className="dot">•</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
