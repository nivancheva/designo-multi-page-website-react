import './CountryExpand.css'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import("./Map/Map"), {
    loading: () => <p>loading...</p>,
    ssr: false
})

export default function CountryExpand( {name, street, city, telephone, email, mapImg, abbreviation, position} ) {
    return (
        <div className="country_expand-wrapper">
            <div className='map-img'>
                <Map position={position}/>
            </div>
            
            <div className={`country-details reverce-${abbreviation}`}>
                <h2>{name}</h2>
                <div className='country-details-info'>
                    <div className='margin-contact'>
                        <p className='font-bold'>Designo AU Office</p>
                        <p>{street}</p>
                        <p>{city}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Contact</p>
                        <p>P : {telephone}</p>
                        <p>M : {email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}