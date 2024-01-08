"use client"

import GetInTouch from './components/GetInTouch'
import Quality from './components/Quality'
import qualitiesJson from '../qualities.json'
import { useState } from 'react'
import imagePhone from './assets/image-hero-phone.png'
import Image from 'next/image'


export default function Home() {
  const [qualities, setQualities] = useState(qualitiesJson);

  return (
    <div className="container grid">
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

      <div className='qualities-container'>
        {qualities.map(quality => {
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
