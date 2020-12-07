import Hero from "../components/HomeComponents/Hero";
import CustomScroller from "react-custom-scroller";
import About from "../components/HomeComponents/About";
import Services from "../components/HomeComponents/Services/Services";
import Clients from "../components/HomeComponents/Clients";
import Footer from "../components/Layout/Wrapper/Footer";
import { Container } from "react-bootstrap";

const Home = () => (
    <CustomScroller>
        <div className="home">
            <Container>
                <Hero />
                <About />
                <Services />
                <Clients />
            </Container>

            <Footer />
        </div>
    </CustomScroller>
);

export default Home;
