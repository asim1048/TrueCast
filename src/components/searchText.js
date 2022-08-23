import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function searchText() {
  return (
    <div>
      <p className='firstText'>Detect fake news</p>

      <div className="sep">
        <p className='firstText'>on any article,</p>
        <p className='secondText'>in seconds,</p>
      </div>
      <p className='simple'>Detect fake news with and advance Machine Learning prototype to avoid </p>
      <p className='simple' >widespread of Misinformation</p>

      <div className='input_ok'>
        <input className='input' type="text" onChange={(val) => { console.log(val) }} />
        <h4 className='button'>Getting Started</h4>
        <FontAwesomeIcon icon="fa-thin fa-arrow-right" size='10px' color='white' />
      </div>
      <div className='choice'>
        <p style={{width:'30%'}}>Free 7 day trail</p>
        <ul style={{display:'flex', flexDirection:'row', width:'70%'}}>
          <li >Easy setup</li>
          <li style={{marginLeft:'20px'}}>Cancel any time</li>
        </ul>
      </div>
    </div>
  )
}
//         <input style={{height:'20px',padding:'2px'}} type="text" onChange={(val)=>{console.log(val)}}/>

