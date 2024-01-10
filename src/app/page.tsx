import GetInTouch from './components/GetInTouch/GetInTouch'
import Quality from './components/Quality/Quality'
import DesignLink from './components/DesignLink/DesignLink'
import qualitiesJson from '../qualities.json'
import imagePhone from './assets/image-hero-phone.png'
import Image from 'next/image'
import designsJson from'../designs.json'



export default function Home() {
  return (
    <div className="container">
      <div className='page-heading'>
        <div>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p className='margin-b'>With over 10 years in the industry, we are experienced in creating fully responsive websites, apps, and engaging brand experiences. Find out more about our services.</p>
          <button className='button-secondary'>Learn more</button>
        </div>
        <div>
          <Image className='phone-img' src={imagePhone} alt='image of a phone'/>
        </div>
      </div>

      <div className='section-gap grid gap-[1.5rem] design-link-wparrer'>
        <DesignLink design={designsJson.webDesign} large/>
        <DesignLink design={designsJson.appDesign}/>
        <DesignLink design={designsJson.graphicDesign}/>
      </div>

      <div className='qualities-container section-gap'>
        {qualitiesJson.map(quality => {
          return (
            <Quality key={quality.id} {...quality}/>
          )
        })}
      </div>
      
      <div className='translateY'>
        <GetInTouch />
      </div>
    
    </div>
  )
}
