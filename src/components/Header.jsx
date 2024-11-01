import React, { useState } from 'react'
import './Header.css'

const Header = () => {

    const [active, setActive] = useState(false)

    const toggleBurger = () => {
        setActive(!active)
    }

    console.log(active);
    

  return (
    
    <>
        <header className='header'>
            <div className="container">
                <div className="header_wrap">
                    
                    <img className='logo' src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" alt="" />

                    <div className={`header_menu ${active ? 'active' : ''}`}>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contacts</a>
                    </div>

                    <div className={`burger ${active ? 'active' : ''}`} onClick={toggleBurger}>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>
        </header>
    </>
  )
}

export default Header
