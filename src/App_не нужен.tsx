import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import { NavBar } from './components/NavBar'
import { Blog } from './components/Blog'
import { SliderSection } from './components/SliderSection'
import { ServiceSection } from './components/ServiceSection'
import { AboutSection } from './components/AboutSection'
import { CaseSection } from './components/CaseSection'
import { ClientSection } from './components/ClientSection'
import { ContactSection } from './components/ContactSection'
import { FooterContainer } from './components/FooterContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <div className='navbar'>
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </div> */}
      <div className="hero_area">
        <NavBar />
        <SliderSection />
      </div>
      <ServiceSection />
      <AboutSection />
      <CaseSection />
      <ClientSection />
      <ContactSection />
      <FooterContainer />
      {/* <Blog /> */}

    </div>
  )
}

export default App
