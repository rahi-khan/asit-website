import Hero from "../components/HomeComponents/Hero";
import CustomScroller from "react-custom-scroller";

const Home = () => (
    <CustomScroller>
        <div className="home">
            <Hero />
        </div>
    </CustomScroller>
);

export default Home;
