import React from 'react'
import "../Pages/Navbar.css"
import Imageslider from './Imageslider'
import { NavLink } from 'react-router-dom'

const slides=[
  {url:"https://www.elpolloloco.com/content/img/hero/M4-2022-Combos-Hero-Desktop-2560x1280.webp",title:"img1"},
  {url:"https://www.elpolloloco.com/content/img/hero/M5-Free-Chips-Hero-Desktop-2560x1280.webp",title:"img2"},
  {url:"https://www.elpolloloco.com/content/img/hero/M4-2022-Combos-Hero-Desktop-2560x1280.webp",title:"img3"},
  {url:"https://www.elpolloloco.com/content/img/hero/M3-2021-Team-2-Hero-Desktop-2560x1280.webp",title:"img4"},
  {url:"https://www.elpolloloco.com/content/img/hero/M2-2022-Family-Feast-Hero-Desktop-2560x1280.webp",title:"img5"},
]

const Home = () => {
  return (
    
    <div className='startimg'>
      {/* <img src="./images/logo1.png" alt="" /> */}
      <div className='ssld1'><Imageslider slides={slides}/></div>
      {/* <img id='img1' src="https://www.elpolloloco.com/content/img/hero/M5-Free-Chips-Hero-Desktop-2560x1280.webp" alt="" /> */}
      {/* <img id="img2" src="https://www.elpolloloco.com/content/img/chicken-leg_1280.webp" alt="" /> */}
      <img id="img3" src="https://www.elpolloloco.com/content/img/catering_1280.webp" alt="" />

      
          {/* <button id='but1' ><NavLink style={{textDecoration:"none" ,color:"white"}} to="/ourfood">Spice</NavLink></button> */}

<div className='div22'>     
<h1 className='hhh3'>Perfect pollo is just a click away.</h1>
<br />
<br />

        <p id='p2'><br /> Lunch and hungry <br /> Arrived for early lunch. Service was excellent. <br />
         Selected from the 2 menus available, the portions <br /> are great for two people and the rice plate is
          awesome! Must try is staying nearby. <br /> Not expensive at all. <br /> <br /> Order online for quick pick up or delivery where available.</p>
          <button id='but2' ><NavLink style={{textDecoration:"none" ,color:"white"}} to="/ourfood">Order Now</NavLink></button>
  <img id="img4" src="https://www.elpolloloco.com/content/img/order-now_1280.webp" alt="" /></div>
 


  <div className='div23'>     
<h1 className='hhh4'>Loco Rewards</h1>
<br />
<br />

        <p id='p3'>
        Receive FREE Chips and Guacamole when you join Loco Rewards™ through the app. <br />Available immediately after you sign up. <br /> are great for two people and the rice plate is
          awesome! Must try is staying nearby. <br /> Not expensive at all. <br /> <br /> Order online for quick pick up or delivery where available.</p>
          <button id='but3' ><NavLink style={{textDecoration:"none" ,color:"white"}} to="/ourfood">Learn More</NavLink></button>
  <img id="img5" src="https://www.elpolloloco.com/contentAsset/raw-data/7cbfc1dbaf0e5c47d2af837f15f3a828/fileAsset?language_id=1" alt="" /></div>
   
    



</div>

    )
} 

export default Home