import './Card.css'

export default function Card( {category, image, title, text} ) {
    return (
        <div>
            <img src={`../${category}/${image}.jpg`} alt='card images'/>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}