import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Navvy from "./components/Nav/Navvy";

const App = () => (
    <Router>
        <Navvy />

        <div className="App bg-dark d-flex flex-column justify-content-center align-items-center text-center">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
            </Switch>
        </div>
    </Router>
);

export default App;
