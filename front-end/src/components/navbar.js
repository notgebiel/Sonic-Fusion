import '../stylesheets/navbar.css'
import React, { useState } from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { SiTiktok } from "react-icons/si";
import { SlSocialSoundcloud } from "react-icons/sl";





export default function NavBar(props) {
    const [active, setActive] = useState(props.active);

    const handleItemClick = (item) => {
        setActive(item);
    };

    return (
        <div className="navbardiv">
            <ul className="navbarul">
                <li id="navli" className={active === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}><a href="/">Home</a></li>
                <li id="navli" className={active === 'Over ons' ? 'active' : ''} onClick={() => handleItemClick('Over Ons')}><a href="/over_ons">Over ons</a></li>
                <li id="navli" className={active === 'Prijzen' ? 'active' : ''} onClick={() => handleItemClick('Prijzen')}><a href="/prijzen">Prijzen</a></li>
                <li id="navli" className={active === 'Boeken' ? 'active' : ''} onClick={() => handleItemClick('Boeken')}><a  href="/boeken">Boeken</a></li>
                <li id="navli" className={active === 'Merch' ? 'active' : ''} onClick={()=> handleItemClick('Merch')}><a href="/merch">Merch</a></li>
                <li id="navliicon" className='smicons'><a href="https://www.instagram.com/dj_sonic_fusion/"><IoLogoInstagram /></a></li>
                <li id='navliicon' className='smicons'><a href="https://www.tiktok.com/@dj_sonic_fusi0n?is_from_webapp=1&sender_device=pc" target='_blank'><SiTiktok /></a></li>
                <li id="navliicon" className='smicons'><a href="https://on.soundcloud.com/a3BPdste21QEZq5i9" target='_blank'><SlSocialSoundcloud /></a></li>

            </ul>
        </div>
    )
}