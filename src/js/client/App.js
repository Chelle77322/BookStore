import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "../shared/components/NavTabs.js";
import Saved from '../shared/pages/Save.js';
import Search from '../shared/pages/Search.js';

function App() {
    return (
        <Router>
           
            <div>
            <NavTabs />
            <Route exact path = "/" component = {Search}/>
                <Route exact path = "/search" component = {Search}/>
                <Route exact path = "/save" component = {Saved} />
            </div>
            
        </Router>
    );
}
export default App;