import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type ActiveType = "home" | "info" | "contact" | "location" | "impressum";

interface LayoutProps {
    active?: ActiveType;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ active, children }) => {
    return (
        <div>
            <Navbar active={active} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;