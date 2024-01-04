'use client'

import Link from "next/link";
import logo from '../assets/logo/logo-dark.png'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import Image from "next/image";
import './Navbar.css'
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className="navbar">
            <div className="container flex items-center justify-between">
                <Link href='/'>
                    <Image
                        src={logo}
                        alt='Logo image and home page button'
                        width={200}
                        height={27}
                    />
                </Link>
                <div>
                    <button onClick={handleClick} className="mobile-menu">
                        <Image src={isOpen ? close : hamburger } alt='open menu'/>
                    </button>
                    <div className={`navbar-links ${isOpen ? 'open' : 'close'}`}>
                        <Link href='/company'>Our company</Link>
                        <Link href='/location'>Location</Link>
                        <Link href='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
        { isOpen && 
            <div className="navbar-overlay">
            </div>
        }
        </>
    )
}