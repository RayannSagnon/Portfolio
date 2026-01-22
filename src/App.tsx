import './App.css'
import eloquence from './assets/eloquence.jpg'
import parents from './assets/parents.JPG'
import montreal from './assets/montreal.jpg'
import diplome from './assets/diplome.jpg'
import team from './assets/team.jpg'
import falls from './assets/falls.png'
import kart from './assets/kart.JPEG'
import brevet from './assets/brevet.jpg'

function App() {
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

      {/* Hero Hi There */}
      <section className="hero-hi-there">
        <h1 className="hero-hi">Hi</h1>
        <div className="hero-image-center">
          <img src={eloquence} alt="Portrait" />
        </div>
        <h1 className="hero-there">There</h1>
      </section>

      {/* Section I AM RAYANN */}
      <section className="section-intro">
        <div className="intro-left">
          <h2 className="intro-am">I AM</h2>
          <h2 className="intro-rayann">RAYANN</h2>
          <p className="intro-description">
            I am a Computer Engineering student passionate about building impactful digital solutions, blending software, AI, and design.
          </p>
        </div>

        {/* Collage Grid */}
        <div className="collage-wrapper">
          <div className="collage-grid">
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
        <div className="intro-right">
          <p className="specialization">
            Specialized in Front-End Development, UI/UX Design, and Web Applications.
          </p>
          <h3 className="title-engineer">
            <span>COMPUTER</span>
            <span>ENGINEER</span>
          </h3>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-traits">
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
        </div>
      </footer>
    </div>
  )
}

export default App
