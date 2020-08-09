import React from "react";
import { BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Moisture from './Moisture';
import Intensity from './Intesity';
import PageNotFount from './404';
import Intesity from "./Intesity";

function PageRoutes() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/moisture" component={Moisture}></Route>
                    <Route path="/intensity" component={Intesity}></Route>
                    <Route path="*" component={PageNotFount}></Route>
                </Switch>
            </Router>
        </div>
    )
}
export default PageRoutes;