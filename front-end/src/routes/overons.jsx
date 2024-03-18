import NavBar from "../components/navbar";
import Carousel from "../components/imageslider";
import '../stylesheets/carousel.css';
//import foto's
import image1 from '../fotos_front_page/Afbeelding.jpg';
import image2 from '../fotos_front_page/Afbeelding(1).jpg';
import image3 from '../fotos_front_page/Afbeelding(2).jpg';
import image4 from '../fotos_front_page/Afbeelding(3).jpg';
import image5 from '../fotos_front_page/Afbeelding(4).jpg';
import image6 from '../fotos_front_page/Afbeelding(5).jpg';

export default function OverOns() {
    const images = [image1, image2, image3, image4, image5, image6];

    return(
        <>
        <div>
            <NavBar active="Over ons" />
            <Carousel images={images} />
        </div>
        </>
    )
}