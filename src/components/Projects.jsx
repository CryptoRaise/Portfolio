import React from 'react'
import ReactParallax from '../assets/portfolio/reactParallax.jpg'
import Crypto from '../assets/portfolio/Crypto.png'
import Solo from '../assets/portfolio/solotech.png'
import Secret from '../assets/portfolio/secret.png'
import keeper from '../assets/portfolio/keeper.png'
import drum from '../assets/portfolio/drum.png'
import Quote from '../assets/portfolio/quote.png'
import Image from 'next/image'

const Projects = () => {

    const Projects = [
        {
            id:1,
            src:Solo,
            demohref:"https://reacttest-swart.vercel.app/",
            codehref:"https://github.com/MrAryan8728/SoloTech"
        },
        {
            id:2,
            src:Crypto,
            demohref:"https://crypto-six-khaki.vercel.app/",
            codehref:"https://github.com/MrAryan8728/CryptoX"
        },
        {
            id:3,
            src:Secret,
            demohref : "https://github.com/MrAryan8728/Secret_Storing_Website",
            codehref : "https://github.com/MrAryan8728/Secret_Storing_Website",
        },
        {
            id:4,
            src:Quote,
            demohref : "https://github.com/MrAryan8728/keeperClone.git",
            codehref : "https://github.com/MrAryan8728/keeperClone.git",
        },
        {
            id:5,
            src:drum,
            demohref:"https://github.com/MrAryan8728/drum",
            codehref:"https://github.com/MrAryan8728/drum",
        },
        {
            id:6,
            src:keeper,
            demohref:"https://github.com/MrAryan8728/keeperClone",
            codehref:"https://github.com/MrAryan8728/keeperClone",
        },
    ]
  return (
    <div name="Projects" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className=' py-6'>Check out some of my work right here</p>
            </div>
            
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                Projects.map(({id,src,demohref, codehref})=>(

                    <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                        <Image src={src} alt='image' className=' rounded-md duration-200 hover:scale-110'/>
                        <div className=' flex items-center justify-center'>
                            <a href={demohref} target='blank'><button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>
                            Demo</button></a>
                            <a href={codehref} target='blank'><button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>
                            Code</button></a>
                        </div>
                    </div>

                ))
            }
            </div>
        </div>

    </div>
  )
}

export default Projects