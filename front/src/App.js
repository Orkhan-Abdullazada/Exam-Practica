import React, { useEffect, useState } from 'react'
import axios from "axios"
import Maincontext from './context/context';
import {BrowserRouter, RouterProvider,createBrowserRouter } from 'react-router-dom';
import ROUTES from './index.router';
import Wishlist from './Page/Wishlist';
import toast from 'react-hot-toast';
const router=createBrowserRouter(ROUTES)


function App() {
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)
  const [error,setError]=useState("")
  const [wishList,setWishList]=useState(localStorage.getItem("wishlistItem")? JSON.parse(localStorage.getItem("wishlistItem")):[])
//   const [search,setSerch]=useState([])
const [search, setSearch] = useState([])


 const addToWishlist=(item)=>{
   const target=wishList.find(wishListItem=>wishListItem._id== item._id)
   console.log(target)
   if(target){
      toast.error("wishlistde movcuddur")
   }else{
      setWishList([...wishList,item])
      localStorage.setItem("wishlistItem",JSON.stringify([...wishList,item]))
      toast.success("added to wishlist")
   }
  
 }

 const removeFromwishlist=(id)=>{
   const item=wishList.find(item=>item._id==id)
   wishList.splice(wishList.indexOf(item),1)
   setWishList([...wishList])
   localStorage.setItem("wishlistItem",JSON.stringify([...wishList]))
   toast.success("deleted from wishlist")
}

// const handlesearch=(searchValue)=>{
//    if(searchValue){
//       setSerch([...data.filter(item=>item.name.tolowerCase().trim.includes(searchValue.tolowerCase().trim()))])
//    }
//    else{
//       setSerch([...data])
//    }
// }

const handleSearch = (searchvalue) => {
   console.log(searchvalue)
   if (searchvalue == "") {
       setData([...search])
   } else {
       const searchItem = data.filter(item => {
           return item.name.trim().toLowerCase().includes(searchvalue.trim().toLowerCase())
       })
       setData([...searchItem])
   }
}


  useEffect(()=>{
     axios.get("http://localhost:5001/crop").then(res=>{
      console.log(res.data)
      setData(res.data)
      setSearch(res.data)
     })
  },[])
  const value={
   data,
   addToWishlist,
   wishList,
   removeFromwishlist,
   handleSearch
  
   
 }




  return (
   <div>

<Maincontext.Provider value={value} >

<RouterProvider router={router}/>
</Maincontext.Provider>
   </div>
     
    
  )
}

export default App

