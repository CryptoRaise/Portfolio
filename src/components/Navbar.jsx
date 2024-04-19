"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "About" },
        { id: 3, link: "Projects" },
        { id: 4, link: "Skills" },
        { id: 5, link: "Contact" }
    ];

    const [nav, setNav] = useState(false);

    return (
        <nav className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
            <div>
                <h1 className='font-signature text-5xl ml-2'>Aryan</h1>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-400'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
