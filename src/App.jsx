import React, {Component} from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import NavTabs from "./js/shared/components/NavTabs.jsx";
import Home from "./js/shared/pages/Home.jsx";
import Search from "./js/shared/pages/Search.jsx"
import Saved from "./js/shared/pages/Save.jsx";

import api from "./js/shared/utils/api.js";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            home: {
                title: "Search and Save Books in your very own BookStore",
            },
            search: {
                title: "Search books using Google Books",
                as: "input",
                type: "button",
                value: "Input",
                variant: "success",
                classes: "float-right mb-2",
                size: "sm",
              },
              saved: {
                title: "Saved books from Google Books",
              },
              searchInput: "",
              books: [],
              title: "",
              authors: [],
              description: "",
              image: "",
              link: "",
              publisher: "",
              publishedDate: "",
        };
    }
    handleinputchange = (event) => {
        this.setState({searchInput: event.target.value});
    };
    handleformsubmit = (event) => {
        event.preventDefault();
        api.getNovel(this.state.searchInput).then((result)=>{
            this.setState({novels: [result.data.items]});
        });
    };
    handlenovelclick = (event) => {
        event.preventDefault();
        let newNovel = this.state.novels[0].filter((novel) => {
            return novel.id === event.target.parentNode.dataset.id;
        });
        let title = newNovel[0].volumeInfo.title;
    let authors = newNovel[0].volumeInfo.authors;
    let description = newNovel[0].volumeInfo.description;
    let image = newNovel[0].volumeInfo.imageLinks.thumbnail;
    let link = newNovel[0].volumeInfo.infoLink;
    let publisher = newNovel[0].volumeInfo.publisher;
    let publishedDate = newNovel[0].volumeInfo.publishedDate;
    this.setState(
        {
          title: title,
          authors: authors,
          description: description,
          image: image,
          link: link,
          publisher: publisher,
          publishedDate: publishedDate,
        },
    ()=>
    api.saveNovel({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link,
        publisher: this.state.publisher,
        publishedDate: this.state.publishedDate,
    })
    );
    alert(`This book has been saved to your bookstore`);
    };
    render() {
        return (
            <Router>
                <NavTabs/>
                <Routes>
                <Route exact path ="/" render={() => <Home title={this.state.home.title }/>}/>
                <Route
            exact
            path="/search"
            render={() => (
              <Search
                title={this.state.search.title}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                books={this.state.books}
                id={this.state.books}
                handleSaveBook={this.handleSaveBook}
                type={this.state.search.type}
                variant={this.state.search.variant}
                className={this.state.search.classes}
                size={this.state.search.size}
              />)}/>
                <Route
            exact
            path="/saved"
            render={() => <Saved title={this.state.saved.title} />}
          />
          </Routes>
            </Router>
        )
    }
} 
export default App;