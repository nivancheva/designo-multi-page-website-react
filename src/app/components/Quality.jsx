export default function Quality({ image, heading, text}) {
    return (
        <div>
            <img src={`qualities-images/${image}`} alt='qualities images' />
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    )
}