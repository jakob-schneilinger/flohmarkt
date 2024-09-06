import "../src/app/globals.css";
import { NextPage } from "next";
import Layout from "@/components/Layout";


const Contact: NextPage = () => {
    return (
        <Layout active="contact">
            <div className="mainBody">
                contact
            </div>
        </Layout>
    );
};

export default Contact;