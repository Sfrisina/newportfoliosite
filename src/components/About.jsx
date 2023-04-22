import React, {forwardRef} from 'react'

const About = (props, ref) => {
  return (
    <>
    <div ref={ref} id={'about'} className='section-head about'>
    <div id="about-items">
    <h1>Sal Frisina</h1>
    <p id="about-text"> Hello, I'm Sal Frisina, a full-stack software engineer based in Atlanta, GA. I'm passionate about bringing web dreams to life! Whether you need a new website or want to revamp your current one, I can create exceptional digital experiences for you. With my specialized skills in website development and occasional design, let's work together to make your online vision a reality! </p>
    </div>
    </div>
    </>
  )
}

export default forwardRef(About)