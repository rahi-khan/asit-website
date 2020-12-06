import { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Layout";
import BG from "../../images/background-image-overlay.jpg";
import LoadingSpinner from "./LoadingSpinner";

const Wrapper = ({ children }) => (
    <Router>
        <div className="BG" style={BGstyles}>
            <Layout>
                <Suspense fallback={<LoadingSpinner />}>
                    <Switch>{children}</Switch>
                </Suspense>
            </Layout>
        </div>
    </Router>
);

const BGstyles = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
};

export default Wrapper;
