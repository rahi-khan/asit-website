import { lazy } from "react";
import { Route } from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper/Wrapper";

const Home = lazy(() => import("./pages/Home"));
const LeadTeam = lazy(() => import("./pages/LeadTeam"));
const Story = lazy(() => import("./pages/Story"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
    <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/leadteam" component={LeadTeam} />
        <Route exact path="/story" component={Story} />
        <Route component={NotFound} />
    </Wrapper>
);

export default App;
