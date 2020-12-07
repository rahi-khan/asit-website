import Hero from "../components/HomeComponents/Hero";
import CustomScroller from "react-custom-scroller";
import About from "../components/HomeComponents/About";
import Services from "../components/HomeComponents/Services/Services";

const Home = () => (
    <CustomScroller>
        <div className="home">
            <Hero />
            <About />
            <Services />
        </div>
    </CustomScroller>
);

export default Home;
