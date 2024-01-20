import React, { useContext } from 'react'
import "./Card.scss"
import Maincontext from '../context/context'
import { Toaster } from 'react-hot-toast';

function Card({item}) {
  console.log("222", item)
  const {addToWishlist}=useContext(Maincontext)
  return (
    <div>
      <div class="card" style={{ width:"18rem;"}}>
 <img src={item.image} alt="" style={{width:"200px", height:"250px"}} />
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text" style={{color:"gray"}}>{item.position}</p>
    <button onClick={()=>{
      addToWishlist(item)
    }}>add to wishlist</button>
  </div>
</div>
      <Toaster/>
    </div>
  )
}

export default Card
