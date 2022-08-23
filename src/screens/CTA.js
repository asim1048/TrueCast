import React from 'react'
import '../components/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CTA() {
    const SearchText = () => {
        return (
            <div>
                <p className='firstText' style={{marginLeft:'50px'}}>Ready to drive in?</p>

                <div className="sep">
                    <p className='firstText' style={{marginLeft:'50px'}}>Check for fake news</p>
                </div>
                <p className='simple'>Detect fake news with and advance Machine Learning prototype to avoid widespread of Misinformation  </p>
                <p className='simple' >widespread of Misinformation</p>

                <div className='input_ok'>
                    <input className='input' type="text" onChange={(val) => { console.log(val) }} />
                    <h4 className='button'>Getting Started</h4>
                    <FontAwesomeIcon icon="fa-thin fa-arrow-right" size='10px' color='white' />
                </div>
                <div className='choice'>
                    <p style={{ width: '30%' }}>Free 7 day trail</p>
                    <ul style={{ display: 'flex', flexDirection: 'row', width: '70%' }}>
                        <li >Easy setup</li>
                        <li style={{ marginLeft: '20px' }}>Cancel any time</li>
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div style={{ marginTop: '100px', marginLeft: '70px', display: 'flex', height: '100px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <div style={{ marginLeft:'270px' }}>
                    <SearchText />
                </div>


            </div>
        </div>
    )
}
