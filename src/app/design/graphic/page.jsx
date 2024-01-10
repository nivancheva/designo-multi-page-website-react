import DesignLink from '../../components/DesignLink/DesignLink'
import designsJson from '../../../designs.json'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import Card from '../../components/Card/Card'
import graphic from './graphiccards.json'
import './GraphicDesign.css'

export default function GhraphicDesign() {
    return (
        <div className=''>
            <div className='design-heading'>
                <h1>Graphic Design</h1>
                <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
            </div>

            <div className='section-gap container grid cards-wrapper'>
                {graphic.map(card => {
                    return (
                        <Card key={card.id} {...card}/>
                    )
                })}
            </div>

            <div className='links-designs grid section-gap container'>
                <DesignLink design={designsJson.appDesign}/>
                <DesignLink design={designsJson.webDesign}/>
            </div>

            <div className='translateY container'>
                <GetInTouch />
            </div>
        </div>
    )
}