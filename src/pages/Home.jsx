import Hero from "../components/HomeComponents/Hero";
import CustomScroller from "react-custom-scroller";
import About from "../components/HomeComponents/About";
import Services from "../components/HomeComponents/Services/Services";
import Clients from "../components/HomeComponents/Clients/Clients";
import Footer from "../components/Layout/Footer";
import { Container } from "react-bootstrap";
import Testimonials from "../components/HomeComponents/Testimonials/Testimonials";
import Contact from "../components/HomeComponents/Contact/Contact";

const Home = () => (
    <CustomScroller>
        <div className="home">
            <Container>
                <Hero />
                <About />
                <Services />
                <Clients />
                <Testimonials />
                <Contact />
            </Container>

            <Footer />
        </div>
    </CustomScroller>
);

export default Home;
