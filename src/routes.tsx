import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Mappage from "./pages/Map-page";

function Routes () {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/app" component={Mappage} />
        </Switch>
        </BrowserRouter>
        
    );
}

export default Routes;