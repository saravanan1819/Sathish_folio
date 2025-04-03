import React, { useState } from 'react'
import actorlogo from '../assets/ActorLogo.png';
import { BsArrowUpSquareFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Header({scrollToSection }) {
  const [menuopen,Setmenuopen]=useState(false);
  const handleonmenu = () =>
  {
      Setmenuopen(!menuopen);
  }
  return (
    <div className='header' id="home">
         <div className='header-container'>
               <div className='left'> 
                   <img src={actorlogo}/>
                   {/* <h2 className='h2'>SathisKumar</h2> */}
               </div>
               <div className="right">
                  <ul>
                     <li onClick={() => scrollToSection("about")}><p>About Me</p></li>
                     <li onClick={() => scrollToSection("work")}><p>Work</p></li>
                     <li onClick={() => scrollToSection("gallery")}><p>Gallery</p></li>
                     <li onClick={() => scrollToSection("contact")}><p>Contact Us</p></li>
                     <li><p>More</p></li>
                  </ul>
               </div>
               <div className='right-mobile'>
                    <div className='menu-bg' onClick={handleonmenu}>
                          <div className='circle'></div>
                    </div>
                         {menuopen && 
                         <div className=' menubg-text' >
                         <div className='circle-icon' onClick={handleonmenu}><RxCross2 /></div>
                         <p style={{color:"white"}} onClick={() => scrollToSection("about")}>About Me</p>
                         <p  onClick={() => scrollToSection("work")}>Work</p>
                         <p onClick={() => scrollToSection("gallery")}>Gallery</p>
                         <p onClick={() => scrollToSection("contact")}>Contact Us</p>
                     </div>} 
               </div>
         </div>
         {/* home-up-move-arrow */}
          <div className="home-up-move-arrow">
               <BsArrowUpSquareFill onClick={() => scrollToSection("home")}/>
          </div>
    </div>
  )
}

export default Header;