import "../src/app/globals.css";
import "./impressum.css";
import { NextPage } from "next";
import Layout from "@/components/Layout";


const Impressum: NextPage = () => {
    return (
        <Layout active="impressum">
            <div className="mainBody">
                <div className="centeredText">
                    <p>Pielachtaler Flohmarkt (GesbR)</p>
                    <p>Industriestraße 1</p>
                    <p>A-3200 Ober-Grafendorf</p>
                    <p>E-Mail: <a href="mailto:office@ek19.at">office@ek19.at</a></p>
                    <p>Telefon: <a href="tel:+436503268360">+43 650 3268360</a></p>
                    <p>Für den Inhalt verantwortlich:<br />Franz JAKOB</p>
                    <br />
                    <p>
                        Die Verkäufer am Pielachtaler Flohmarkt sind in<br />
                        Räumlichkeiten der Blaika Immo GmbH mit Sitz am<br />
                        gleichen Standort eingemietet.
                    </p>
                </div>
            </div>
        </Layout >
    );
};

export default Impressum;