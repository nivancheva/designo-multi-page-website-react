import './Footer.css'
import Image from 'next/image'
import logo from '../assets/logo/logo-light.png'
import Link from 'next/link'
import facebook from '../assets/social-media/icon-facebook.svg'
import youtube from '../assets/social-media/icon-youtube.svg'
import twitter from '../assets/social-media/icon-twitter.svg'
import pinterest from '../assets/social-media/icon-pinterest.svg'
import instagram from '../assets/social-media/icon-instagram.svg'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container grid footer-wrapper">
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
                        <p className='font-bold'>Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
  
                    <div>
                        <p className='font-bold'>Contact Us (Central Office)</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>

                    <div className='flex social-media'>
                        <Link href='https://www.facebook.com/?locale=bg_BG' target='blank'>
                            <Image src={facebook} alt='facebook'/>
                        </Link>
                        <Link href='https://www.youtube.com/' target='blank'>
                            <Image src={youtube} alt='youtube'/>
                        </Link>
                        <Link href='https://twitter.com/?lang=bg' target='blank'>
                            <Image src={twitter} alt='twitter'/>
                        </Link>
                        <Link href='https://www.pinterest.com/' target='blank'>
                            <Image src={pinterest} alt='pinterest'/>
                        </Link>
                        <Link href='https://www.instagram.com/' target='blank'>
                            <Image src={instagram} alt='instagram'/>
                        </Link>
                 </div>
                </div>
            </div>
        </div>
    )
}