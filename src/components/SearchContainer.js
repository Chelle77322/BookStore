import React, {Component} from "react";
import NovelCard from "./NovelCard.js";
import Row from "./Row.js";
import SearchForm from "./SearchForm.js"
import Jumbotron from "./Jumbo.js";

import api from "../utils/api.js";

class SearchContainer extends Component {
    state = {
        search: "",
        results: []
    };
//Occurs when the page loads

componentDidMount(){
console.log("Webpage components have loaded");
this.SearchNovels("");
}
//Query to Google Books API to find the book
SearchNovels = query => {
    api.search(query).then(result => this.setState({results:result.data.items})).then(console.log(this.state.results)).catch(error => console.log(error));
}
//When a book is clicked on 
handlenovelclick = event => {
    let NovelId = event;
    console.log(NovelId);
}
//Handles the change in input
handleinputchange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});

}
//Handles the search form submission
handleformsubmit = event => {
    event.preventDefault();
    this.SearchNovels(this.state.search);
}
render () {
    return (
        <div className = "container-fluid-five">
            <Jumbotron />
            <Row>
                <SearchForm
                googleNovels = {this.state.search}
                handleformsubmit = {this.handleformsubmit}
                handleinputchange = {this.handleinputchange}/>
            </Row>\

            <Row>
                {this.state.results.map(novel => (
                    <NovelCard
                    id= {novel.volumeInfo.id}
                    key={novel.volumeInfo.id}
                    title={novel.volumeInfo.title}
                    description={novel.volumeInfo.description}
                    imageLink={novel.volumeInfo.imageLinks.thumbnail}
                    link={novel.volumeInfo.infoLink}
                    handleClick={this.handlenovelclick}/>
                ))}
            </Row>
        </div>
    )
}
}
export default SearchContainer;