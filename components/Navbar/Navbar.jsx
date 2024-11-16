import React, { useRef, useState } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.jpg'
import underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/openmenu.svg'
import menu_close from '../../assets/menuclose.svg'


const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }


  
  return (
    <div className='navbar'>
        <img src={logo} alt=""/>
        <img src={menu_open} onClick={openMenu} alt=""className='nav-mob-open'/>
        <h1>Welcome to Prasad Site</h1>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="Close Menu"  className="nav-mob-close" />
            <li><AnchorLink className='anchor-link'href='#home'><p onClick={()=>setMenu("home")}>Home </p></AnchorLink>{menu==="home"?<img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link'offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me </p></AnchorLink>{menu==="about"?<img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link'offset={50} href='#activity'><p onClick={()=>setMenu("activity")}>Activity</p></AnchorLink>{menu==="activity"?<img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link'offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact </p></AnchorLink>{menu==="contact"?<img src={underline} alt='' />:<></>}</li>

        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect With Me</AnchorLink></div>

    </div>
  );
}

export default Navbar
