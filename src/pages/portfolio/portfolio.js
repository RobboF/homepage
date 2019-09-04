import React from 'react'
import Header from '../../components/header/header'
import ProjectCard from '../../components/projectCard/projectCard'
// import './portfolio.css'


function Portfolio() {
    return (
        <div>
            <Header/>
            <div className="flex flex-wrap mh5 justify-around">
                <ProjectCard/>  
            </div>
        </div>
    )
}
export default Portfolio