import Link from "next/link";
import logo from '../assets/logo/logo-dark.png'
import Image from "next/image";


export default function Navbar() {
    return (
        <div>
            <div className="container flex items-center justify-between">
                <Link href='/'><Image src={logo} alt='logo image'/></Link>
                <div className="flex gap-[2.625rem]">
                    <Link href='/company'>Our company</Link>
                    <Link href='/location'>Location</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}