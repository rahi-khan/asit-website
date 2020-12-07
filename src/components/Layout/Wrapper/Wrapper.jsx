import { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import BG from "../../../images/background-image-overlay.jpg";
import LoadingSpinner from "./LoadingSpinner";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Wrapper = ({ children }) => (
    <Router>
        <div className="App" style={BGstyles}>
            <Header />

            <Suspense fallback={<LoadingSpinner />}>
                <Switch>{children}</Switch>
            </Suspense>
        </div>
    </Router>
);

const BGstyles = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${BG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
};

export default Wrapper;
