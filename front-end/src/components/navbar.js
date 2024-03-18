import '../stylesheets/navbar.css'
import React, { useState } from 'react';

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
                <li id="navli" className={active === 'Socials' ? 'active' : ''} onClick={() => handleItemClick('Socials')}><a href="/socials">Socials</a></li>
            </ul>
        </div>
    )
}