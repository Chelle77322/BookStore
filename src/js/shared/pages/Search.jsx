import React, {Component} from "react";
import NovelCard from "../components/NovelCard.jsx";
import Row from "../components/Row.jsx";
import SearchForm from "../components/SearchForm.jsx";
import Jumbotron from "../components/Jumbo.jsx";
import api from "../utils/api.js";
import "../scss/main-style.scss";

export class Searched extends Component {

    state = {
        search: "",
        results: []
    };
//When the page loads initially
componentDidMount() {
    console.log("Components successfully mounted");
    
}

googleNovels = query => {
    api.googleNovels(query).then(result => this.setState({results:result.data.items})).then(console.log(this.state.results)).catch(error => console.log(error));
}
//When save button is clicked
handlesaveclick = event => {
    const novelInfo = event;
    
//You then want to save the book to the data base
api.SaveNovel(novelInfo).then(result => console.log(result)).catch(error => console.log(error));
}
handleinputchange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
}
handleformsubmit = event => {
    event.preventDefault();
    this.googleNovels(this.state.search);
}
render() {
    return (
        <div className = "container-fluid five">
            <Jumbotron />
            <Row>
                <SearchForm
                search = {this.state.search}
                handleformsubmit = {this.handleformsubmit}
                handleinputchange = {this.handleinputchange} />
            </Row>
            
            <Row >
                    {this.state.results.map(novel => ( 
                        <NovelCard
                            id={novel.id} 
                            key={novel.id} 
                            title={novel.volumeInfo.title} 
                            description={novel.volumeInfo.description} 
                            image={novel.volumeInfo.imageLinks.thumbnail} 
                            link={novel.volumeInfo.infoLink} 
                            handlesaveclick={this.handlesaveclick}
                        />
                    ))}
            </Row>
            </div>
       
    )
}
}
