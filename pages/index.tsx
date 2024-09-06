import Image from "next/image";
import "../src/app/globals.css";
import "./index.css";
import mainImg from "@/img/Industriestrasse1_1.png"
import Slider from '@/components/Slider';
import FacebookIcon from "@/components/FacebookIcon";
import dynamic from 'next/dynamic';
import Layout from "@/components/Layout";
import Link from "next/link";

const Location = dynamic(() => import('@/components/Location'), {
    ssr: false,
});

export default function Index() {
    return (
        <Layout active="home">
            <div className="mainBody">
                <div className="mainImageContainer">
                    <Image src={mainImg} alt="MainImage" objectFit="cover" fill={true} className="mainImage"></Image>
                    <div className="overImageContainer">
                        <h1>
                            <br />WILLKOMMEN BEIM<br />PIELACHTALER<br />FLOHMARKT
                        </h1>
                        <h2>
                            <br />Unsere Öffnungszeiten:<br />Jeden Samstag und Sonntag<br />von 8-15 Uhr
                        </h2>
                    </div>
                </div>
                <div className="infoBanner">
                    Hallo
                </div>
                <div className="secondStickyBanner">
                    <a className="buttonLink" target="_blank" href="https://www.facebook.com/PielachtalerFlohmarkt">
                        <button className="facebookButton">
                            <p className="facebookButtonText">Für aktuelle Angebote und News besuchen Sie doch auch unsere <u>Facebook Seite</u>: </p>
                            <FacebookIcon />
                        </button>
                    </a>
                </div>
                <Slider />
                <div className="locationHeader">
                    <Link href="/location"><h1 className="locationHeaderText">Unser Standort</h1></Link>
                </div>
                <Location />
            </div>
        </Layout>
    );
}
