import { lazy } from "react";
import { Route } from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper";

const Home = lazy(() => import("./pages/Home"));
const LeadTeam = lazy(() => import("./pages/LeadTeam"));
const Story = lazy(() => import("./pages/Story"));

const App = () => (
    <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/leadteam" component={LeadTeam} />
        <Route exact path="/story" component={Story} />
    </Wrapper>
);

export default App;
