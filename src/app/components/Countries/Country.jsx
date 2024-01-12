import './Country.css'
import Link from 'next/link'

export default function Country( {image, country} ) {
    return (
        <div className="country-wrapper">
            <div className='bg-country'>
                <img src={`countries/${image}.svg`}/>
            </div>
            <h3 className="uppercase mt-[3rem] mb-[2rem]">{country}</h3>
            <Link href='/location'><button className="button-primary">See Location</button></Link>
        </div>
    )
}