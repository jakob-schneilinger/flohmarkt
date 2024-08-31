import Image from "next/image";
import "./globals.css";
import "./page.css";
import mainImg from "@/img/Industriestrasse1_1.png"
import Navbar from '@/components/Navbar';
import Slider from '@/components/Slider';
import FacebookIcon from "@/components/FacebookIcon";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mainBody">
        <div className="mainImageContainer">
          <Image src={mainImg} alt="MainImage" objectFit="cover" fill={true} className="mainImage"></Image>
          <div className="overImageContainer">
            <h1 className="textOverImageH1">
              <br/>WILLKOMMEN BEIM<br/>PIELACHTALER<br/>FLOHMARKT
            </h1>  
            <h2 className="textOverImageH2">
              <br/>Unsere Öffnungszeiten:<br/>Jeden Samstag und Sonntag<br/>von 8-15 Uhr
            </h2>
          </div>
        </div>
        <div className="bannerUnderMainImage">
          <a className="buttonLink" href="https://www.facebook.com/PielachtalerFlohmarkt">
            <button className="facebookButton">Für aktuelle Angebote und News besuchen Sie doch auch unsere Facebook Seite: <FacebookIcon></FacebookIcon></button>
          </a>
        </div>
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </div>
    </>
  );
}
