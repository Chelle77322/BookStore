import React, {Component} from "react";
import NovelCard from "../components/NovelCard.jsx";
import Row from "../components/Row.jsx";
import SearchForm from "../components/SearchForm.js";
import Jumbotron from "../components/Jumbo.jsx";

import "../../../styles/main-style.scss";

export default class Home extends Component{

render() {
  return (
    <div className ="blend">
    
      <Jumbotron/>
     
        <Row>
        <SearchForm />
          <NovelCard />
         </Row>
    
    </div>
  );
};
}

