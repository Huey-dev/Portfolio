import React, { useState, useEffect, useRef } from 'react'
import './Navbar.scss'
import {images} from '../../constants'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const menuRef = useRef(null)

  useEffect(() => {

    // function to handle clicks outside the menu
    const handleClicksOutsideMenu = (e) => {

      // check if the cllcked eleent is outside the menu element
      if ( menuRef.current && !menuRef.current.contains(e.target) ) {
        // the clicked element is outside the menu, so close the menu
        setToggle(false)
      }
    }

    document.addEventListener('click', handleClicksOutsideMenu)

    return() => {
      document.removeEventListener('click', handleClicksOutsideMenu)
    }
      
  }, [])
  
  const handleLinkClick = () => {
    setToggle(false);
  }
  return (
    <div>
      <nav className='app__navbar'>
        {/* image div */}
        <div className='app__navbar-logo'>
          <img src={images.myLogo} alt="" />
        </div>
        {/* navigation content */}
        <ul className='app__navbar-links'>
          {/* create an array of navigation content or elements */}
          {['home', 'about', 'project', 'testimonials', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu" ref={menuRef}>
          <HiMenuAlt3 onClick={() => setToggle(true)}/>

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration:0.85, ease: 'easeInOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'project', 'testimonial' , 'contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={handleLinkClick}>{item}</a>
                    </li>
                  ))}
                </ul>
            </motion.div>
            )}

        </div>
      </nav>
    </div>
  )
}

export default Navbar
