import '../stylesheets/navbar.css'
import React, { useState, useEffect } from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { SiTiktok } from "react-icons/si";
import { SlSocialSoundcloud } from "react-icons/sl";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState('');

    const handleItemClick = (item) => {
        setActive(item);
    };

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        updateIsMobile(); // Eerste keer instellen bij montage

        window.addEventListener("resize", updateIsMobile);
        return () => {
            window.removeEventListener("resize", updateIsMobile);
        };
    }, []); // Leeg array als tweede argument betekent dat deze effect alleen bij montage en demontage wordt uitgevoerd

    return (
        <div>
            {isMobile ? <MobileNavbar active={active} handleItemClick={handleItemClick} /> : <DesktopNavbar active={active} handleItemClick={handleItemClick} />}
        </div>
    );
};

const MobileNavbar = ({ active, handleItemClick }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className={`navbardiv ${isOpen ? 'open' : ''}`}>
                <ul className='navbarul'>
                    <li id="navliiconmb" className='smiconsmb'><a href="https://www.instagram.com/dj_sonic_fusion/"><IoLogoInstagram /></a></li>
                    <li id='navliiconmb' className='smiconsmb'><a href="https://www.tiktok.com/@dj_sonic_fusi0n?is_from_webapp=1&sender_device=pc" target='_blank'><SiTiktok /></a></li>
                    <li id="navliiconmb" className='smiconsmb'><a href="https://on.soundcloud.com/a3BPdste21QEZq5i9" target='_blank'><SlSocialSoundcloud /></a></li>
                    <li>
                        <div className={`menubtncontainer ${isOpen ? 'change' : ''}`} onClick={toggleMenu}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div className='dropdown'>
                <ul className='dropdownul'>
                    <li id="navli" className={`menu-item ${isOpen ? 'show' : ''}`} onClick={() => handleItemClick('Home')}><a href="/">Home</a></li>
                    <li id="navli" className={`menu-item ${isOpen ? 'show' : ''}`} onClick={() => handleItemClick('Over Ons')}><a href="/over_ons">Over ons</a></li>
                    <li id="navli" className={`menu-item ${isOpen ? 'show' : ''}`} onClick={() => handleItemClick('Prijzen')}><a href="/prijzen">Prijzen</a></li>
                    <li id="navli" className={`menu-item ${isOpen ? 'show' : ''}`} onClick={() => handleItemClick('Boeken')}><a href="/boeken">Boeken</a></li>
                    <li id="navli" className={`menu-item ${isOpen ? 'show' : ''}`} onClick={() => handleItemClick('Merch')}><a href="/merch">Merch</a></li>
                </ul>
            </div>
        </nav>
    );
    
};

const DesktopNavbar = ({ active, handleItemClick }) => {
    return (
        <nav>
            <div className="navbardiv">
                <ul className="navbarul">
                    <li id="navli" className={active === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}><a href="/">Home</a></li>
                    <li id="navli" className={active === 'Over ons' ? 'active' : ''} onClick={() => handleItemClick('Over Ons')}><a href="/over_ons">Over ons</a></li>
                    <li id="navli" className={active === 'Prijzen' ? 'active' : ''} onClick={() => handleItemClick('Prijzen')}><a href="/prijzen">Prijzen</a></li>
                    <li id="navli" className={active === 'Boeken' ? 'active' : ''} onClick={() => handleItemClick('Boeken')}><a href="/boeken">Boeken</a></li>
                    <li id="navli" className={active === 'Merch' ? 'active' : ''} onClick={() => handleItemClick('Merch')}><a href="/merch">Merch</a></li>
                    <li id="navliicon" className='smicons'><a href="https://www.instagram.com/dj_sonic_fusion/"><IoLogoInstagram /></a></li>
                    <li id='navliicon' className='smicons'><a href="https://www.tiktok.com/@dj_sonic_fusi0n?is_from_webapp=1&sender_device=pc" target='_blank'><SiTiktok /></a></li>
                    <li id="navliicon" className='smicons'><a href="https://on.soundcloud.com/a3BPdste21QEZq5i9" target='_blank'><SlSocialSoundcloud /></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
