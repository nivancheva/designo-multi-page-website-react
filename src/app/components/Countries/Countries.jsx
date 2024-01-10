import Country from "./Country";
import countriesJson from '../../../countries.json'
import './Countries.css'

export default function Countries() {
    return(
        <div className="grid country-wrapper section-gap container">
            {countriesJson.map(country => {
                return (
                    <Country key={country.id} {...country}/>
                )
            })}
        </div>
    )
}