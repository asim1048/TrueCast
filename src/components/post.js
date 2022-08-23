import React from 'react'
import image1 from '../assets/popup-free.png';
import image2 from '../assets/image47.png';
import image3 from '../assets/Vector.png';
import image4 from '../assets/Vector1.png';
import image5 from '../assets/Vector2.png';

export default function post() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '270px' }}>
      <img src={image1} style={{ height: '90px', width: '270px' }} alt="Logo" />
      <img src={image2} style={{ height: '180px', width: '270px', }} alt="Logo" />
      <p>
        The body of the late US Rep. John
        Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <p style={{ margin: 0 }}>5 hours</p>
        <p style={{ margin: 0, color: 'darkgray' }}>By Lucy Hiddleston</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin:5}}>
        <p style={{ margin: 0, }}>ago</p>
        <p style={{ margin: 0 }}>5 min</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', margin:5, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img src={image3} style={{ height: '30px', width: '30px', }} alt="Logo" />
          <p style={{ marginLeft: '2px' }}>5</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img src={image4} style={{ height: '30px', width: '30px', }} alt="Logo" />
          <p style={{ marginLeft: '2px' }}>3</p>
        </div>
        <img src={image5} style={{ height: '30px', width: '30px', }} alt="Logo" />
      </div>
    </div>
  )
}
