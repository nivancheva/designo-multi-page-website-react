import './DesignLink.css'
import arrowImg from '../../assets/icon-right-arrow.svg'
import Image from 'next/image'

export default function DesignLink( {design, classname=""} ) {
    return (
        <div className={`design-link text-center ${classname}`} >
            <h2>{design.title}</h2>
            <div className='flex gap-[1.25rem] items-center justify-center'>
                <p className="uppercase tracking-[.25em] text-[15px]">View project</p>
                <Image src={arrowImg} alt='arrow image'/>
            </div>
        </div>
    )
}