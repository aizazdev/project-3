import React from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

import Home from './Home';
import PageNotFount from './404';


function PageRoutes() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    
                    <Route path="*" component={PageNotFount}></Route>
                </Switch>
            </Router>
        </div>
    )
}
export default PageRoutes;