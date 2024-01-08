import './Quality.css'

export default function Quality({ image, heading, text}) {
    return (
        <div className='quality-wrapper'>
                <img className='bg-qualities-image' src={`qualities-images/${image}`} alt='qualities images' />
            <div>
                <h3 className='qualities-heading'>{heading}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}