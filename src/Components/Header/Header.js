import React, { useState } from 'react';
import './Header.css'
import logo from '../../Media/logo.png'
import login_bg from "../../Media/login bg.png"
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [open, setOpen] = useState(false);

    const menuItems = <>
        <Link onClick={() => setOpen(false)} to='/about_us'  >
            Home</Link>
        <Link onClick={() => setOpen(false)} to='/team'>About</Link>
        <Link onClick={() => setOpen(false)} to='/pipeline'>Teachers</Link>
        <Link onClick={() => setOpen(false)} to='/news_and_events'>Event</Link>
        <Link onClick={() => setOpen(false)} to='/career'>Gallery</Link>
        <Link onClick={() => setOpen(false)} to='/contact'>Contact</Link>
        <Link onClick={() => setOpen(false)} to='/contact'>Blog</Link>
        <Link onClick={() => setOpen(false)} to='/contact'>Admission</Link>

    </>
    return (
        <div className='main_nav0 '>
            <div className='main_nav '>

                <div>
                    <Link to="/" onClick={() => setOpen(false)}> <img className='logosize' src={logo} alt="logo" /></Link>
                </div>

                <div className='flexiblenav'>
                    <div >
                        <ul className='menu_commonview'>
                            {menuItems}
                        </ul>
                    </div>
                    <div>
                        <img src={login_bg} alt="" id='login_bg' />
                    </div>
                    <div onClick={() => setOpen(!open)} className="hamburger">
                        {open ?
                            <FontAwesomeIcon icon={faBars} />
                            :
                            <FontAwesomeIcon icon={faBars} />}
                    </div>
                </div>
            </div>
            <div className={`${open ? 'sidebar1' : 'sidebar2'}`}>
                <div className="flexible">

                    <div>
                        <ul className="sidebar_menu">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;