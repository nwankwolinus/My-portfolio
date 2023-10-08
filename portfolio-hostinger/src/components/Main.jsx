// eslint-disable-next-line no-unused-vars
import React from 'react'
import img1 from '../assets/horizontal.jpeg'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebookF,  FaInstagram,  FaLinkedin, FaGithub } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img 
               className='w-full h-screen object-cover object-left scale-x-[-1]' 
               src={img1} 
               alt="" 
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center' >
                    <h1 className='sm: text-5xl text-4xl font-bold text-gray-800'>I&#39;m Linus Nwankwo</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I&#39;m a
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Developer',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Coder',
                            2000,
                            'Tech Enthusiast',
                            2000,
                            'Full-time Electrical Engineer',
                            2000,
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />  
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://www.twitter.com/NwankwoLinus3">
                        <FaTwitter className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.facebook.com/linus.nwankwo.129">
                        <FaFacebookF className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.instagram.com/engr_l19us">
                        <FaInstagram className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/linus-nwankwo-049942b5">
                        <FaLinkedin className='cursor-pointer' size={20}/>
                        </a>
                        <a href="https://github.com/nwankwolinus">
                        <FaGithub className='cursor-pointer' size={20}/>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Main
