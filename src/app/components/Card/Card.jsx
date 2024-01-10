import './Card.css'

export default function Card( {category, image, title, text} ) {
    return (
        <div className='card'>
            <img src={`../${category}/${image}.jpg`} alt='card images'/>
            <div className='card-text'>
                <h3 className='title'>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}