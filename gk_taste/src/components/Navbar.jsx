import React from 'react'
import { NavLink } from 'react-router-dom'
//  { AiFillShopping,AiFillFacebook } from "react-icons/ai";
// import "../components/Pages/"
import {AiFillShopping,AiFillEnvironment,AiOutlineUser } from "react-icons/ai";
import "./Pages/Navbar.css"
// import {IoLocation} from "react-icons"

const activelink={textDecoration:"none", color:"brown"}
const defelink={textDecoration:"none", color:"black"}
// import { AiFillFacebook } from 'react-icons/fa';
// impor

const link=[
    {path:"/",title:"HOME"},
    {path:"/ourfood",title:"OUR FOOD"},
    {path:"/about",title:"OUR STORY"},
    {path:"/giftcards",title:"GIFT CARDS"},
    {path:"/careers",title:"CAREERS"},
    {path:"/franchi",title:"FRANCHISING"}
]
const Navbar = () => {
  return (
<>
<nav className='main-nav'>
    <div className='logo'>
    
        <NavLink style={{textDecoration:"none"}} to="/"><h2>GK's Taste</h2></NavLink>
        {/* <img src={logo1} alt="" /> */}
        
    </div>

{/* menu bar */}

<div className='menubar'>
    {/* <ul> */}
    {link.map((el)=>{
    return(
        // <li>
            <NavLink style={({isActive})=>{return isActive?activelink :defelink}} to={el.path}>{el.title}</NavLink>
            // </li>
    )
})}
    {/* </ul> */}

</div>

<div className='social-media'>
    {/* socialmedia */}
    {/* <ul> */}
        {/* <li> */}
            <NavLink to="/"><AiFillShopping/></NavLink>
        {/* </li> */}
        {/* <li> */}
            <NavLink to="/"><AiFillEnvironment/></NavLink>
            <NavLink to="/login"><AiOutlineUser/></NavLink>
            
            
            {/* </li> */}
    {/* </ul> */}
</div>
</nav>
</>
  )
}


export default Navbar