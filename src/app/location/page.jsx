import countriesJson from '../../countries.json'
import CountryExpand from '../components/Countries/CountryExpand'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import './Location.css'

export default function Location() {
    return (
        <div>
            <div className="countries_container grid">
                {countriesJson.map(country => {
                    return (
                        <CountryExpand key={country.id} {...country}/>
                    )
                })}          
            </div>

            <div className='translateY container'>
                <GetInTouch />
            </div>
        </div>
    )
}