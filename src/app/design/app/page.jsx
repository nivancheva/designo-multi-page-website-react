import DesignLink from '../../components/DesignLink/DesignLink'
import designsJson from '../../../designs.json'
import GetInTouch from '../../components/GetInTouch/GetInTouch'

export default function AppDesign() {
    return (
        <div className=''>
            <div className='design-heading'>
                <h1>App Design</h1>
                <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
            </div>
            <div className='section-gap container'>
                Cards
            </div>

            <div className='links-designs grid section-gap container'>
                <DesignLink design={designsJson.webDesign}/>
                <DesignLink design={designsJson.graphicDesign}/>
            </div>

            <div className='translateY container'>
                <GetInTouch />
            </div>
        </div>
    )
}