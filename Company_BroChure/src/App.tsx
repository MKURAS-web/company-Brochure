import './App.css'
import { useState, useEffect } from 'react'
import Logo from './assets/logo1.png'
import FooterLogo from './assets/logo.png'
import BackgroundImage from './assets/image.png'
import Slide1 from './assets/image1.png'
import Slide2 from './assets/image2.png'
import Slide3 from './assets/image3.png'
import Slide4 from './assets/image4.png'
import Slide5 from './assets/image5.png'

const highlights = [
  {
    title: 'Strategic Growth',
    text: 'Aligned with the Belt and Road initiative and focused on steady expansion from Southeast Asia to Africa.',
  },
  {
    title: 'Energy Infrastructure',
    text: 'We deliver modern transmission, transformation and distribution solutions for fast-developing markets.',
  },
  {
    title: 'Talent & Sustainability',
    text: 'We cultivate local engineering talent and promote reliable, green and efficient power systems.',
  },
]

const services = [
  {
    title: 'Power Transmission & Distribution',
    text: 'Design and delivery of high-voltage transmission and distribution systems for dependable energy access.',
  },
  {
    title: 'Engineering Procurement & Construction',
    text: 'Integrated EPC support for complex energy infrastructure projects with strong technical coordination.',
  },
  {
    title: 'Project Consulting & Support',
    text: 'Technical consulting, implementation support and long-term project partnership for public and private stakeholders.',
  },
]

const projects = [
  {
    title: 'Laos 500 kV Project',
    text: 'A high-voltage backbone grid strengthening power trade links between China and Laos.',
  },
  {
    title: 'Vietnam Transmission Network',
    text: 'EPC-based transmission projects that improved grid stability and regional electricity access.',
  },
  {
    title: 'Africa Expansion',
    text: 'A growing footprint in Tanzania and wider East Africa with long-term infrastructure partnerships.',
  },
]

const values = [
  'Enterprise qualification and strict compliance with national standards',
  'Sincere, professional and customer-focused service',
  'Technology-led innovation and continuous improvement',
]

const slideshowImages = [Slide1, Slide2, Slide3, Slide4, Slide5]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className='logo'><img src={Logo} alt="Logo" /></div>
        <div className='barcontent'>
          <p className="brand-name">China Southern Power Grid International Co., Ltd.</p>
          <span className="brand-tag">Powering progress across Africa</span>
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero1">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">One Belt One Road • Strategic Layout</p>
            <h1>Lights in all houses, deep love from Southern Power Grid.</h1>
            <p className="hero-text">
              We are a leading international energy partner building efficient, safe and green transmission and distribution networks for Africa and beyond.
            </p><br/>
            <p className='hero-text'>China Southern Power Grid International Co., Ltd. is a subsidiary of China Southern Power Grid, headquartered in Dar es Salaam, Tanzania. It operates alongside two sister companies — China Southern Power Grid Technology Co., Ltd. and China Southern Power Grid Overseas Engineering Co., Ltd. — to jointly develop the company's business across Africa.</p>

<p className='hero-text'>Since its founding, the company has followed the national Belt and Road strategy, taking a "trial first, improve gradually" approach as it expanded from Southeast Asia into Africa. Dar es Salaam's fast-growing economy has made it a key base for that expansion, anchoring a series of projects supporting Tanzania's power infrastructure and energy development.</p>


            <div className="hero-actions">
              <a className="btn btn-primary" href="#about">Explore our profile</a>
              <a className="btn btn-secondary" href="#contact">Contact us</a>
            </div>
            
          </div>

          <div className="hero-card">
            <h2>Company Profile</h2>
            <p>
              As an important subsidiary of China Southern Power Grid, we are headquartered in Dar es Salaam, Tanzania, with a growing footprint across the continent.
            </p>
            <ul>
              <li>Focused on ultra-high voltage transmission and distribution</li>
              <li>Committed to local engineering capability and technology transfer</li>
              <li>Supporting economic growth and public power access</li>
            </ul>
          </div>
        </section>
            <div className="hero-badges">
              <span className='span'>Try first, then improve gradually</span>
              <span className='span'>Reliable energy infrastructure</span>
              <span className='span'>Green and sustainable growth</span>
            </div>
          </section>

          <section className="slideshow-section">
            <div className="section-heading">
              <p className="eyebrow">Our gallery</p>
              <h2>Featured images from our work</h2>
            </div>
            <div className="slideshow">
              <button
                type="button"
                className="slide-button prev"
                onClick={() => setActiveSlide((prev) => (prev + slideshowImages.length - 1) % slideshowImages.length)}
                aria-label="Previous image"
              >
                ‹
              </button>

              <div className="slideshow-frame">
                <img
                  src={slideshowImages[activeSlide]}
                  alt={`Slideshow image ${activeSlide + 1}`}
                  className="slideshow-image"
                />
                <span className="slide-label">Image {activeSlide + 1} of {slideshowImages.length}</span>
              </div>

              <button
                type="button"
                className="slide-button next"
                onClick={() => setActiveSlide((prev) => (prev + 1) % slideshowImages.length)}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </section>
        <div className="section-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <section id="about" className="section content-section">
            <div className="section-heading">
              <p className="eyebrow">About us</p>
              <h2>Built on trust, technology and long-term partnerships</h2>
            </div>
            <div className="about-grid">
              <article className="card large-card">
                <h3>Who we are</h3>
                <p>
                  Since our establishment, we have actively responded to national strategies and expanded our business layout from Southeast Asia to Africa, with Tanzania becoming a strategic base for our regional development.
                </p>
                <p>
                  Our work supports local power infrastructure, improves reliability and helps communities access modern energy systems with confidence.
                </p>
              </article>
              <article className="card">
                <h3>What guides us</h3>
                <ul className="check-list">
                  {values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </div>

          <section id="services" className="section content-section">
            <div className="section-heading">
              <p className="eyebrow">Our services</p>
              <h2>Practical solutions for modern energy systems</h2>
            </div>
            <div className="feature-grid">
              {services.map((service) => (
                <article className="feature-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </section>

        <section id="solutions" className="section alt-section">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Engineering solutions for a changing energy landscape</h2>
          </div>
          <div className="feature-grid">
            {highlights.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected projects</p>
            <h2>Delivering impact across regional power networks</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>


      </main>

      <footer className="footer">
        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="section-heading">
              <p className="eyebrow">Get in touch</p>
              <h2>Let’s build stronger power networks together.</h2>
              <p>
                Reach out to learn more about our services, projects and regional presence.
              </p>
            </div>
            <div className="contact-details">
              <p><strong>Contact:</strong> Lesport</p>
              <p><strong>Phone:</strong> +255 0793 678 627</p>
              <p><strong>Email:</strong> info@csg-international.com</p>
              <p><strong>Location:</strong> Dar es Salaam, Tanzania</p>
            </div>
          </div>
        </section>
        <div className="footer-branding">
          <img src={FooterLogo} alt="Footer logo" className="footer-logo" />
          <p>© 2025 China Southern Power Grid International Co., Ltd. • Powering the future with reliability and care.</p>
        </div>
      </footer>
    </div>
  )
}

export default App