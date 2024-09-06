import "../src/app/globals.css";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import Selling from "@/components/Selling";
import AboutUs from "@/components/AboutUs";


const Info: NextPage = () => {
    return (
        <Layout active="info">
            <div className="mainBody">
                <AboutUs />

                <Selling />
            </div>
        </Layout>
    );
};

export default Info;
