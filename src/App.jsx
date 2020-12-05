import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BG from "./images/background-image-overlay.jpg";

const Home = lazy(() => import("./pages/Home"));
const LeadTeam = lazy(() => import("./pages/LeadTeam"));
const Story = lazy(() => import("./pages/Story"));

const App = () => (
    <Router>
        <div className="BG" style={BGstyles}>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/leadteam" component={LeadTeam} />
                        <Route exact path="/story" component={Story} />
                    </Switch>
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

export default App;
