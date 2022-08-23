import React from 'react'
import SearchText from '../components/searchText'
import Post from '../components/post'

export default function search() {
  return (
    
    <div style={{marginTop:'100px',marginLeft:'70px',display:'flex',height:'100px'}}>
    <div style={{display:'flex',flexDirection:'row',}}>
      <div  style={{marginTop:'70px'}}>
      <SearchText />
      </div>
      <div style={{marginLeft:'150px',}}>
          <Post/>
      </div>

    </div>
    </div>
  )
}
