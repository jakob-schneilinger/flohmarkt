import "../src/app/globals.css";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import Location from "@/components/Location";


const LocationSite: NextPage = () => {
    return (
        <Layout active="location">
            <div className="mainBody">
                <Location />
            </div>
        </Layout>
    );
};

export default LocationSite;