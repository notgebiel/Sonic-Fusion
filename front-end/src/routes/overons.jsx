import React from 'react';
import NavBar from "../components/navbar";
import Footer from '../components/footer';
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
    return (
        <div className="overons">
            <NavBar />
            <div className="container1">
                <img src={image1} alt="Image 1" className="imagesoo" />
                <div className="content">
                    <h2>foto van milo alleen</h2>
                    <p>Description for image 1.</p>
                </div>
            </div>
           {/* <div className="container2">
                <img src={image2} alt="Image 2" className="imagesoo" />
                <div className="content">
                    <h2>Title 2</h2>
                    <p>Description for image 2.</p>
                </div>
            </div>
            <div className="container3">
                <img src={image3} alt="Image 3" className="imagesoo" />
                <div className="content">
                    <h2>Title 3</h2>
                    <p>Description for image 3.</p>
                </div>
            </div>*/}
            
        </div>
    );
}