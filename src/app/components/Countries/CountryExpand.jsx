import './CountryExpand.css'

export default function CountryExpand( {name, street, city, telephone, email, mapImg, abbreviation} ) {
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