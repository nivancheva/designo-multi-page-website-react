import './CountryExpand.css'

export default function CountryExpand( {country, street, city, telephone, email, mapImg} ) {
    return (
        <div className="country_expand-wrapper">
            <picture>
                <source
                    srcSet={`locations/desktop/${mapImg}.png`}
                    media="(min-width:864px)"
                />
               <source
                    srcSet={`locations/tablet/${mapImg}.png`}
                    media="(min-width:640px)"
                />
                <img className='map-img' src={`locations/desktop/${mapImg}.png`}/>
            </picture>
            
            <div className="country-details">
                <h2>{country}</h2>
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