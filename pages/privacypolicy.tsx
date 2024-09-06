import "../src/app/globals.css";
import { NextPage } from "next";
import Layout from "@/components/Layout";


const Datenschutzerklärung: NextPage = () => {
    return (
        <Layout>
            <div className="mainBody" >
                Datenschutzerklärung
            </div>
        </Layout>
    );
};

export default Datenschutzerklärung;