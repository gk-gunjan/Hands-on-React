import React from "react";
import "./css/styles.css";

import NavBar from "./Components/Navbar";
import MasterThread from "./Components/Masterthread";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import CopyRight from "./Components/Copyright";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTopBottom";


const App =()=>{
    return (
        <div>
            <NavBar />
            <MasterThread />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <CopyRight />
            <ScrollToTop />
        </div>
    );
}

export default App;