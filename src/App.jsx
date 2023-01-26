import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavTabs from "../src/js/shared/components/NavTabs.jsx";
import Searched from "../src/js/shared/pages/Search.jsx"
import Saved from "../src/js/shared/pages/Save.jsx";
import Home from "../src/js/shared/pages/Home.jsx";

function App() {
    return (
        <Router>
           
            <div>
            <NavTabs/>
            <Route exact path = "/" component = {Home}/>
                <Route exact path = "/search" component = {Searched}/>
                <Route exact path = "/save" component = {Saved} />
            </div>
          
        </Router>,
       
       <Home />


    );
}
export default App;
