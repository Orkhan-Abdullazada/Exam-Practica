import React, { useContext } from 'react'
import Maincontext from '../context/context'
import "./Wishlist.scss"
import { Toaster } from 'react-hot-toast'

function Wishlist() {
    const {wishList,removeFromwishlist}=useContext(Maincontext)
  return (
    <div className='wishlist__all'>
        
        {
            wishList?.map((item,index)=>{
                return(
                    <div class="card" key={index} >
  <img src={item.image} alt="" />
  <div class="card-body" >
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text" style={{color:"gray"}}>{item.position}</p>
    <button onClick={()=>{
      removeFromwishlist(item._id)
    }}>delete</button>
  </div>
</div>
                )
            })
        }
      <Toaster/>
    </div>
  )
}

export default Wishlist
