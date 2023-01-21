import React from 'react'

import { useState,useEffect } from 'react'
import "../Pages/Navbar.css"
import { NavLink } from 'react-router-dom'

const getData=(url)=>{
  return fetch(url).then((res)=>res.json());
}
let pages;
const getData1=()=>{
  return fetch(`https://636c99f691576e19e30fb69c.mockapi.io/items`).then((res)=>res.json()).then((data) => pages=data.length);
}
getData1()
// console.log(getData1())
// // const pages=getData1()
// // console.log(pages.length)

const OurFood = () => {
  const [loading,setloading]=useState(false)
  const [Error,setError]=useState(false)
  const [products,setProducts]=useState([])
  const [page,setPage]=useState(1);

  // const pages=products.length
  //     console.log(pages)

  const fetchdata=async(page)=>{
    setloading(true)
    try{
      let data=await getData(`https://636c99f691576e19e30fb69c.mockapi.io/items?page=${page}&limit=6`);
      setProducts(data)
      
      setloading(false)
    }catch(err){
setError(true)
setloading(false)
    }
  }

  useEffect(()=>{
    fetchdata(page)
  },[page])


  return (
    loading?<h1>Loading...</h1>:Error?<h1>Something went wrong</h1>:
<div>
<div className='div22'>     
<h1 className='hhh33'>Perfect pollo is just a click away.</h1>
<br />
<br />

        <p id='p2'><br /> Lunch and hungry <br /> Arrived for early lunch. Service was excellent. <br />
         Selected from the 2 menus available, the portions <br /> are great for two people and the rice plate is
          awesome! Must try is staying nearby. <br /> Not expensive at all. <br /> <br /> Order online for quick pick up or delivery where available.</p>
          <button id='but222' ><NavLink style={{textDecoration:"none" ,color:"white"}} to="/ourfood">Order Now</NavLink></button>
  <img id="img66" src="https://www.elpolloloco.com/content/img/order-now_1280.webp" alt="" /></div>
{/* <img id="img66" src="https://www.elpolloloco.com/content/img/lamex/fresh-take_1280.webp" alt="" /> */}
<hr />
<h1>The Grilled Spice <br/> Order Now</h1>
    <div className='dd111'>
     
       {products.map((el)=>{
        return(
<div className='dd222'>
  <img className='img11' src={el.image} alt="" />
  <h3>{el.title}</h3>
  <h2>{el.name}</h2>
  <p>{el.price}</p>
  <h5>{el.description}</h5>
  <button className='but11'>Get Info</button>

</div>
        
        )
       })}
    </div>
    <div className='pagination1'>
    <button  className={page!==1?'bbb0':"bbb3"}  disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
    <button id='bbb1' >{page}</button>
    <button className={page===Math.ceil(pages/6)?'bbb3':"bbb0"}  disabled={page===Math.ceil(pages/3)} onClick={()=>setPage(page+1)}>Next</button>
    </div>
</div>
  )
}

export default OurFood