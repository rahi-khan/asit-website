import Hero from "../components/HomeComponents/Hero";
import CustomScroller from "react-custom-scroller";
import About from "../components/HomeComponents/About";

const Home = () => (
    <CustomScroller>
        <div className="home">
            <Hero />
            <About />
        </div>
    </CustomScroller>
);

export default Home;
