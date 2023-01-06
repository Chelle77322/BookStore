import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "../shared/components/NavTabs.jsx";
import Saved from '../shared/pages/Save.jsx';
import Searched from '../shared/pages/Search.jsx';

function App() {
    return (
        <Router>
           
            <div>
            <NavTabs />
            <Route exact path = "/" component = {Searched}/>
                <Route exact path = "/search" component = {Searched}/>
                <Route exact path = "/save" component = {Saved} />
            </div>
            
        </Router>
    );
}
export default App;