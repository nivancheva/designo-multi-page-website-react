"use client"

import GetInTouch from './components/GetInTouch'
import Quality from './components/Quality'
import qualitiesJson from '../qualities.json'
import { useState } from 'react'


export default function Home() {
  const [qualities, setQualities] = useState(qualitiesJson);

  return (
    <div className="container">
      <p>Hello world!</p>
      <div>
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
