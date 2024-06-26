import React from 'react';

const About = () => {
  return (
    <div name='About' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-lg md:text-xl lg:text-2xl mt-8 md:mt-20'>
          <span>👋 Hey there! I	&apos;m Aryan Tiwari, a passionate B.Tech student hailing from the vibrant campus of IERT in Prayagraj. With a keen interest in technology, I thrive on diving deep into the realms of programming, <strong>Data Structures and Algorithms (DSA)</strong>, <strong>Database Management Systems (DBMS)</strong>, <strong>Computer Networks (CN)</strong>, and various other core subjects.</span>
          <br />
          <br />
          <span>On the development front, I specialize in leveraging the power of <strong>MERN</strong> (MongoDB, Express.js, React.js, Node.js) stack, coupled with the dynamic <strong>Next.js</strong> framework. Whether it	&apos;s crafting sleek user interfaces or architecting robust backend systems, I find joy in bringing ideas to life through code.</span>
          <br />
          <span>Driven by curiosity and fueled by a thirst for knowledge, I	&apos;m constantly exploring new horizons in the ever-evolving world of technology. When I	&apos;m not glued to my screen, you can find me tinkering with gadgets, exploring nature	&apos;s beauty, or engaging in stimulating discussions about the latest tech trends.</span>
          <br />
          <br />
          <br />
          <span>Join me on this exciting journey as we unravel the endless possibilities of technology together!</span>
        </p>
      </div>
    </div>
  )
}

export default About;
