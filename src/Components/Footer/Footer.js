import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
import facebook from "../../Media/fb.png"
import twitter from "../../Media/Twitter.png"
import insta from "../../Media/insta.png"
import linkedin from "../../Media/linkedin.png"
import youtube from "../../Media/youtube.png"


const Footer = () => {
    const [open, setOpen] = useState(false);
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer>
            <div className='footer_contnt c_width'>
                <p >iNiLabs School is an independent, non-governmental
                    organisation, established to provide high-quality
                    education to local and expatriate communities in
                    Bangladesh and United State of America.</p>
                <div className='flexible_company_info1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C15.31 2 18 4.66 18 7.95C18 12.41 12 19 12 19C12 19 6 12.41 6 7.95C6 4.66 8.69 2 12 2ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM20 19C20 21.21 16.42 23 12 23C7.58 23 4 21.21 4 19C4 17.71 5.22 16.56 7.11 15.83L7.75 16.74C6.67 17.19 6 17.81 6 18.5C6 19.88 8.69 21 12 21C15.31 21 18 19.88 18 18.5C18 17.81 17.33 17.19 16.25 16.74L16.89 15.83C18.78 16.56 20 17.71 20 19Z" fill="white" />
                    </svg>
                    <h6>Plot:25, Road:05, Block:A, Mirpur-2
                        Dhaka, Bangladesh</h6>
                </div>
                <div className='flexible_company_info1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H17C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7V9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12ZM19 12H21C21 7 16.97 3 12 3V5C15.86 5 19 8.13 19 12ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.18L13.21 17.38C10.38 15.94 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.73478 8.39464 3.48043 8.20711 3.29289C8.01957 3.10536 7.76522 3 7.5 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4C3 8.50868 4.79107 12.8327 7.97918 16.0208C11.1673 19.2089 15.4913 21 20 21C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16.5C21 16.2348 20.8946 15.9804 20.7071 15.7929C20.5196 15.6054 20.2652 15.5 20 15.5Z" fill="white" />
                    </svg>

                    <h6>01236547892</h6>
                </div>
            </div>
            <div className='c_width site_menu'>
                <Link onClick={() => {
                    setOpen(false)

                }} to='/' >
                    Home</Link>
                <br />
                <Link onClick={() => {
                    setOpen(false)

                }} to='/about' >About</Link>
                <br />
                <Link onClick={() => {
                    setOpen(false)

                }} to='/teachers' >Teachers</Link>
                <br />
                <Link onClick={() => {
                    setOpen(false)

                }} to='/events' >Event</Link>
                <br />
                <Link onClick={() => {
                    setOpen(false)

                }} to='/Gallery' >Gallery</Link>
                <br />
                <Link onClick={() => {
                    setOpen(false)

                }} to='/contact' >Contact</Link>
                <br />
                <Link onClick={() => {
                    setOpen(false)

                }} to='/blog' >Blog</Link>
                <br />
                <Link onClick={() => {
                    setOpen(false)

                }} to='/admission' >Admission</Link>
            </div>
            <div className='c_width'>
                <h5>Follow Us</h5>
                <div className='footer_social_icons'>
                    <a href="/"><img src={facebook} alt="" width="48px" height="48px" /></a>
                    <a href="/"> <img src={twitter} alt="" width="48px" height="48px" /></a>
                    <a href="/"><img src={insta} alt="" width="48px" height="48px" /></a>
                    <a href="/"><img src={linkedin} alt="" width="48px" height="48px" /></a>
                    <a href="/"><img src={youtube} alt="" width="48px" height="48px" /></a>

                </div>
                <p id='copyright'>© {year} iNiLabs School </p>
            </div>

        </footer>
    );
};

export default Footer;