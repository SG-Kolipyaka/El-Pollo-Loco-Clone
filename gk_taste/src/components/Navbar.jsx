import React from 'react'
import { Link } from 'react-router-dom'
// import {IoLocation} from "react-icons"
// import { AiFillFacebook } from 'react-icons/fa';
import { AiFillShopping,AiFillFacebook } from "react-icons/ai";
// import "../components/Pages/"
import "./Pages/Navbar.css"


const link=[
    {path:"/",title:"Home"},
    {path:"/ourfood",title:"OurFood"},
    {path:"/",title:"Home"},
    {path:"/",title:"Home"},
    {path:"/",title:"Home"},
    {path:"/",title:"Home"}
]
const Navbar = () => {
  return (
<>
<nav className='main-nav'>
    <div className='logo'>
        <h2><span>GK</span>'s <samp>T</samp>aste</h2>
        
    </div>

{/* menu bar */}

<div className='menubar'>
    {/* <ul> */}
    {link.map((el)=>{
    return(
        // <li>
            <Link to={el.path}>{el.title}</Link>
            
    )
})}
    {/* </ul> */}

</div>

<div className='social-media'>
    {/* socialmedia */}
    {/* <ul> */}
        {/* <li> */}
            <Link to="/"><AiFillShopping/></Link>
        {/* </li> */}
        {/* <li> */}
            <Link to="/"><AiFillFacebook/></Link>
            {/* </li> */}
    {/* </ul> */}
</div>
</nav>
</>
  )
}

// <div>
// {/* <Link to="/">Home</Link> */}
// {link.map((el)=>{
//     return(
//         <Link to={el.path}>{el.title}</Link>
//     )
// })}
//     </div>

export default Navbar