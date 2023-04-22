import React, {useRef} from 'react' 
import Main from './components/Main'
import './scss/main.scss'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  const appRef = useRef(null)
  const navRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  const homeClick = () => {
    navRef.current.classList.toggle('mobileNav-res')
    appRef.current?.scrollIntoView({ behavior: 'smooth'})
  }
  const showNavbar= () => {
    navRef.current?.classList.toggle('mobileNav-res')
  }
  const skillSect = () => {
    navRef.current.classList.toggle('mobileNav-res')
    skillRef.current?.scrollIntoView({behavior: 'smooth'})
  }
  const projectScroll = () => {
    navRef.current.classList.toggle('mobileNav-res')
    projectRef.current?.scrollIntoView({behavior: 'smooth'})
  }
  const showProjects = () => {
    projectRef.current?.scrollIntoView({behavior: 'smooth'})
  }
  const contactSect = () => {
    navRef.current.classList.toggle('mobileNav-res')
    contactRef.current?.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <div ref={appRef} id={'home'} className="App">
      <Navbar
      homeClick={homeClick}
      showNavbar={showNavbar}
      skillSect ={skillSect}
      projectScroll ={projectScroll}
      contactSect={contactSect}
      ref={navRef}
       />
      <Main showProjects={showProjects}/>
      <Skills ref={skillRef}/>
      <Projects ref={projectRef}  />
      <Contact ref={contactRef}/>
      </div>
     
  )
}

export default App
