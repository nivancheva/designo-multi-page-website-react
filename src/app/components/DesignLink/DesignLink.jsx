import './DesignLink.css'

export default function DesignLink( {design, large = false} ) {
    return (
        <div className={`design-link text-center ${large ? "webLink" : ""} ${design.bgImage}`}>
            <h2 className='z-10'>{design.title}</h2>
            <div className='flex gap-[1.25rem] items-center justify-center z-10'>
                <p className="uppercase tracking-[.25em] text-[15px]">View project</p>
                <img src='/icon-right-arrow.svg' alt='arrow image'/>
            </div>
        </div>
    )
}