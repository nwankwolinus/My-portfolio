// eslint-disable-next-line no-unused-vars
import React from 'react'
import appImg from '../assets/app.jpeg'
import cryptoImg from '../assets/crypto.jpeg'
import netflixImg from '../assets/netflix.jpeg'
import shoppingImg from '../assets/shopping.jpeg'
import ProjectItem from './ProjectItem'

const Projects = () => {

    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                The following are some of my projects as a web developer, kindly visit <a href= '#resume' className='text-#000080 font-bold'>resume</a> for more details on other projects
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={appImg} title='Movie Watch List App' />
                <ProjectItem img={cryptoImg} title='Crypto App'/>
                <ProjectItem img={netflixImg} title='Netflix App'/>
                <ProjectItem img={shoppingImg} title='Shopping Cart App'/>
            </div>

        </div>
    )
}

export default Projects