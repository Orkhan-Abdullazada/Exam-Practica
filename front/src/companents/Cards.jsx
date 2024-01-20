import React, { useContext } from 'react'
import Maincontext from '../context/context'
import Card from '../companents/Card'

function Cards() {
   const {data,handleSearch}=useContext(Maincontext)
   console.log("object", data)
  return (
  <div className='Crud'>
      <div className='input'> <input type="text" placeholder='search by name' onChange={(e)=>handleSearch(e.target.value)} /></div>
      <div className='all_cards'>
    
      {
        data.map((item,index)=>{
          return(<Card item={item}  key={index}/> )
        })
      }
      
    </div>
  </div>
  )
}

export default Cards
