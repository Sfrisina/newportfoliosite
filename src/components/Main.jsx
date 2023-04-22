import React, {forwardRef} from 'react'

const Main = ({showProjects}, ref) => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal)

  return (
    <>
    <main id="main">
    <div ref={ref} className='section-head about'>
    <div id="about-items">
      <div>
    <h1 className='myName'>Sal Frisina</h1>
    <h2 className='job-title'>Software Engineer</h2>
    <ul id='social-links'>
      <li className='social'><a href='https://www.linkedin.com/in/salfrisina/' target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
      <li className='social'><a href='https://github.com/Sfrisina' target="_blank"><i className="fa-brands fa-github"></i></a></li>
      <li className='social'><a href='mailto: sfrisina@gmail.com'><i className="fa-solid fa-envelope"></i></a></li>
    </ul>
    <div id='see-my-work-button' onClick={showProjects}>See my work</div>
      </div>
    <p id="about-text"> Hello, I'm a full-stack software engineer based in Atlanta, GA. I'm passionate about bringing web dreams to life! Whether you need a new website or want to revamp your current one, I can create exceptional digital experiences for you. With my specialized skills in website development and occasional design, let's work together to make your online vision a reality! </p>
    </div>
    </div>
    </main>
    </>
  )
}

export default forwardRef(Main)