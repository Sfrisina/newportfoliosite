import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'
import { forwardRef } from 'react'

const Projects = (props, ref) => {
  return (
    <>
    <div ref={ref} id={'projectSect'} className='section-head-projects projects'>
        <h2 className='project-title-section'>Projects</h2>
    </div>
    <div className='project-list'>
        {portfolio.map( project => (
            <PortfolioItem key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
            description={project.description}
            githubLink={project.githubLink}
            />
        ))}
    </div>

    </>
  )
}

export default forwardRef(Projects)