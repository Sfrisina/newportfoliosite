import React from 'react'

const PortfolioItem = ({title, imgUrl, stack, link, description, githubLink}) => {
  return (
    <div className='reveal fade-right project-item'>
    <img 
        src={imgUrl} 
        alt='portfolio'
        className='thumbnail'/>
        <div className='title'>
            <h3 className='project-title'>{title}</h3>
            <p className='project-stack'>{stack.map(item =>(
            <span key={item}>
                {item}
            </span>))}</p>
            <p className='project-description'>{description}</p>
            <div className='project-links'>
              {!githubLink ? '' : <span className='sourceLink'><a href={githubLink} target="_blank">Source Code</a></span>}
            <span className='liveLink'><a href={link} target="_blank">Live Project</a></span>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItem