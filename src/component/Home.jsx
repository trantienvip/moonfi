
import { useEffect } from "react";
import Banner from "./layout/Banner";
import Infomation from "./layout/Infomation";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Partnership from "./layout/Partnership";

const Home = () => {
    useEffect(() => {
        document.title = "MoonFi Protocol";
    }, [])

    return (
        <>
            <Header />
            <Banner />
            <Infomation />
            <Partnership />
            <Footer />
        </>
    )
}

export default Home;