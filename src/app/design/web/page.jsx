import './WebDesign.css'
import DesignLink from '../../components/DesignLink/DesignLink'
import designsJson from '../../../designs.json'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import Card from '../../components/Card/Card'
import webcard from './webcards.json'
import '../../design/Design.css'

export default function WebDesign() {
    return (
        <div className=''>
            <div className='design-heading'>
                <h1>Web Design</h1>
                <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
            </div>
            <div className='section-gap container grid cards-wrapper'>
                {webcard.map(card => {
                    return (
                        <Card key={card.id} {...card}/>
                    )
                })}
            </div>

            <div className='links-designs grid section-gap container'>
                <DesignLink design={designsJson.appDesign}/>
                <DesignLink design={designsJson.graphicDesign}/>
            </div>

            <div className='translateY container'>
                <GetInTouch />
            </div>
        </div>
    )
}