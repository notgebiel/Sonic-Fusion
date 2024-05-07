import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar";
//import Carousel from "../components/imageslider";
import '../stylesheets/overons.css';
//import foto's
import image1 from '../fotos_front_page/Afbeelding.jpg';
import image2 from '../fotos_front_page/Afbeelding(1).jpg';
import image3 from '../fotos_front_page/Afbeelding(2).jpg';
import image4 from '../fotos_front_page/Afbeelding(3).jpg';
import image5 from '../fotos_front_page/Afbeelding(4).jpg';
import image6 from '../fotos_front_page/Afbeelding(5).jpg';


export default function OverOns() {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        return () => {
            window.removeEventListener('resize', updateIsMobile);
        }
    }, []);

    return(
        <div>
            {isMobile ? <MobileOVerOns /> : <DesktopOverOns />}
        </div>
    )
}

const DesktopOverOns = () => {
    return (
        <>
        <div>
            <NavBar active="Over ons" />
            <div className='container1'>
                <img className='imagesoo' src={image1} alt="dj sonic fusion"></img>
                <h3 className='tekstje'>tekstje</h3>
            </div>
            <div className='container2'>
                <img className='imagesoo' src={image2} alt="dj sonic fusion"></img>
                <h3 className='tekstje'>foto van milo met beschrijving</h3>
            </div>
            <div className='container3'>
                <img className='imagesoo' src={image3} alt="dj sonic fusion"></img>
                <h3 className='tekstje'>foto van baptiste met beschrijving</h3>
            </div>
        </div>
        </>
    )
};

const MobileOVerOns = () => {
    return (
        <>
        <div>
            <NavBar active="Over ons" />
            <div className="container1mb">
            </div>
            <h1>mobile over ons</h1>
        </div>
        </>
    )
}