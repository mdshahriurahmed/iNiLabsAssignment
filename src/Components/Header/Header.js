import React, { useState } from 'react';
import './Header.css'
import logo from '../../Media/logo.png'
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [activemenu, setActivemenu] = useState("");

    const menuItems = <>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("/")
        }} to='/' className={`${activemenu === "/" ? "active-color" : "inactive-color"} `} >
            Home</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("about")
        }} to='/about' className={`${activemenu === "about" ? "active-color" : "inactive-color"} `} >About</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("teachers")
        }} to='/teachers' className={`${activemenu === "teachers" ? "active-color" : "inactive-color"} `}>Teachers</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("events")
        }} to='/events' className={`${activemenu === "events" ? "active-color" : "inactive-color"} `}>Event</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("Gallery")
        }} to='/Gallery' className={`${activemenu === "Gallery" ? "active-color" : "inactive-color"} `}>Gallery</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("contact")
        }} to='/contact' className={`${activemenu === "contact" ? "active-color" : "inactive-color"} `}>Contact</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("blog")
        }} to='/blog' className={`${activemenu === "blog" ? "active-color" : "inactive-color"} `}>Blog</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("admission")
        }} to='/admission' className={`${activemenu === "admission" ? "active-color" : "inactive-color"} `}>Admission</Link>

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

                    <div id='login_bg'>
                        <Link onClick={() => {
                            setOpen(false)
                        }} to='/login' className="login_button_style">Login</Link>
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