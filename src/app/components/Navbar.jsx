import Link from "next/link";
import logo from '../assets/logo/logo-dark.png'
import Image from "next/image";
import './Navbar.css'


export default function Navbar() {
    return (
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
                <div className="flex gap-[2.625rem]">
                    <Link href='/company'>Our company</Link>
                    <Link href='/location'>Location</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}