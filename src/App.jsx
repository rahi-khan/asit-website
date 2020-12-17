import { lazy } from "react";
import { Route } from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper";

const AsyncHome = lazy(() => import("./pages/Home"));
const AsyncLeadTeam = lazy(() => import("./pages/LeadTeam"));
const AsyncStory = lazy(() => import("./pages/Story"));
const AsyncNotFound = lazy(() => import("./pages/NotFound"));
const AsyncMoreClients = lazy(() => import("./pages/MoreClients"));
const AsyncMoreServices = lazy(() => import("./pages/ServicesViewMore"));

const App = () => (
    <Wrapper>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/leadteam" component={AsyncLeadTeam} />
        <Route exact path="/story" component={AsyncStory} />
        <Route exact path="/moreclients" component={AsyncMoreClients} />
        <Route exact path="/servicesviewmore" component={AsyncMoreServices} />
        <Route component={AsyncNotFound} />
    </Wrapper>
);

export default App;
