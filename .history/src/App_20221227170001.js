import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Saved from './pages/Save';
import Search from './pages/Search';

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