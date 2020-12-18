import { lazy } from "react";
import { Route } from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper";

const AsyncHome = lazy(() => import("./pages/Home"));
const AsyncLeadTeam = lazy(() => import("./pages/LeadTeam"));
const AsyncStory = lazy(() => import("./pages/Story"));
const AsyncNotFound = lazy(() => import("./pages/NotFound"));
const AsyncMoreClients = lazy(() => import("./pages/MoreClients"));

const AsyncERPRealestate = lazy(() => import("./pages/ServicesPages/ERP/ERPRealestate"));
const AsyncERPFootwear = lazy(() => import("./pages/ServicesPages/ERP/ERPFootwear"));
const AsyncERPConstruction = lazy(() => import("./pages/ServicesPages/ERP/ERPConstruction"));
const AsyncERPHealthcare = lazy(() => import("./pages/ServicesPages/ERP/ERPHealthcare"));
const AsyncERPManufacturing = lazy(() => import("./pages/ServicesPages/ERP/ERPManufacturing"));
const AsyncERPTrading = lazy(() => import("./pages/ServicesPages/ERP/ERPTrading"));

const AsyncGeneralAccounting = lazy(() => import("./pages/ServicesPages/General/GenAccounting"));
const AsyncGeneralTrading = lazy(() => import("./pages/ServicesPages/General/GenTrading"));
const AsyncGeneralHealthcare = lazy(() => import("./pages/ServicesPages/General/GenHealthcare"));
const AsyncGeneralTravel = lazy(() => import("./pages/ServicesPages/General/GenTravel"));
const AsyncGeneralShop = lazy(() => import("./pages/ServicesPages/General/GenShop"));
const AsyncGeneralSchool = lazy(() => import("./pages/ServicesPages/General/GenSchool"));

const App = () => (
    <Wrapper>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/leadteam" component={AsyncLeadTeam} />
        <Route exact path="/story" component={AsyncStory} />
        <Route exact path="/moreclients" component={AsyncMoreClients} />

        <Route exact path="/services/erp/realestate" component={AsyncERPRealestate} />
        <Route exact path="/services/erp/footwear" component={AsyncERPFootwear} />
        <Route exact path="/services/erp/construction" component={AsyncERPConstruction} />
        <Route exact path="/services/erp/healthcare" component={AsyncERPHealthcare} />
        <Route exact path="/services/erp/manufacturing" component={AsyncERPManufacturing} />
        <Route exact path="/services/erp/trading" component={AsyncERPTrading} />

        <Route exact path="/services/general/accounting" component={AsyncGeneralAccounting} />
        <Route exact path="/services/general/trading" component={AsyncGeneralTrading} />
        <Route exact path="/services/general/healthcare" component={AsyncGeneralHealthcare} />
        <Route exact path="/services/general/travel" component={AsyncGeneralTravel} />
        <Route exact path="/services/general/shop" component={AsyncGeneralShop} />
        <Route exact path="/services/general/school" component={AsyncGeneralSchool} />

        <Route component={AsyncNotFound} />
    </Wrapper>
);

export default App;
