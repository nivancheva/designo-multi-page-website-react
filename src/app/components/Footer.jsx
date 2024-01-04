import './Footer.css'
import Image from 'next/image'
import logo from '../assets/logo/logo-light.png'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className='flex items-center justify-between footer-menu'>
                    <Link href='/'>
                        <Image
                            src={logo}
                            alt='Logo image and home page button'
                            width={200}
                            height={27}
                        />
                    </Link>

                    <div className='footer-links'>
                        <Link href='/company'>Our company</Link>
                        <Link href='/location'>Location</Link>
                        <Link href='/contact'>Contact</Link>
                    </div>
                </div>
                <div className='grid contact-info'>
                    <div>
                        <p>Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
  
                    <div>
                        <p>Contact Us (Central Office)</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>

                    <div>
                        <p>Social media</p>
                    </div>
                </div>
            </div>
        </div>
    )
}