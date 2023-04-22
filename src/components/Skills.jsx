import React, {forwardRef} from 'react'

import reactIcon from '../assets/icons/icons8-react.svg'
import html5Icon from '../assets/icons/icons8-html-5.svg'
import css3Icon from '../assets/icons/icons8-css3.svg'
import jsIcon from '../assets/icons/icons8-javascript.svg'
import sassIcon from '../assets/icons/icons8-sass.svg'
import tailwindIcon from '../assets/icons/icons8-tailwind-css.svg'

const Skills = (props, ref) => {
  return (
    <>
    <div ref={ref} id={'skillsSection'} className="section-head-skills skills">
    <h2 id='skills-title'>Skills</h2>
        <div className="reveal fade-bottom" id="skills">
            <div>
                <h3 className="skill-text">Front-End</h3>
                <div className='skill-list'>
                    <div>
                    <img className='skill-icon' src={html5Icon}/>
                    <img className='skill-icon' src={css3Icon}/>
                    <img className='skill-icon' src={reactIcon}/>
                    </div>
                    <div>
                    <img className='skill-icon' src={jsIcon}/>
                    <img className='skill-icon' src={sassIcon}/>
                    <img className='skill-icon' src={tailwindIcon}/>
                    </div>
                </div>

            </div>
            <div>
                <h3 className="skill-text">Back-End</h3>
                <div className='skill-list'>
                <div>
                <img className='skill-icon' src='src\assets\icons\icons8-javascript.svg'/>
                    <img className='skill-icon' src='src\assets\icons\icons8-node-js.svg'/>
                </div>
                <div>
                    <img className='skill-icon' src='src\assets\icons\icons8-express-js-49.svg'/>
                    <img className='skill-icon' src='src\assets\icons\icons8-mongodb.svg'/>
                    </div>
                </div>
            </div>
            <div>
            <h3 className="skill-text">Tools</h3>
             <div className='skill-list'>
                <div>
                <img className='skill-icon' src='src\assets\icons\icons8-visual-studio-code-2019.svg'/>
                <img className='skill-icon' src='src\assets\icons\icons8-git.svg'/>
                </div>   
                <div> 
                    <img className='skill-icon' src='src\assets\icons\icons8-github.svg'/>
                    <img className='skill-icon' src='src\assets\icons\jest-seeklogo.com.svg'/>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default forwardRef(Skills)