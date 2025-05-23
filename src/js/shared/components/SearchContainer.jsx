import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavTabs from "./NavTabs.jsx";
import Row from "./Row.jsx"
import SearchForm from "./SearchForm.js"
import api from"../utils/api.js";
//import Home from "../pages/Home.jsx";

import NovelCard from "./NovelCard.jsx";



export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          home: {
            title: "Search and Save Books from the Google API",
          },
          search: {
            title: "Search books from the Google Books API",
            as: "input",
            type: "button",
            value: "input",
            variant: "success",
            classes: "float-right mb-2",
            size: "sm",
          },
          saved: {
            title: "Saved books from the Google Books API",
          },
          searchInput: " ",
          novels: [],
          title: "",
          authors: [],
          description: "",
          image: "",
          link: "",
          publisher: "",
          publishedDate: "",
        };
      };
//When the page loads
componentDidMount() {
  console.log("Components have mounted");
console.log(this.state);
}

handleinputchange = (event)=> {
    this.setState({searchInput: event.target.value});
};
handleformsubmit = (event) => {
    event.preventDefault();
    api.getNovel(this.state.searchInput).then((result)=> {
        this.setState({novels: [result.data.items]});
    });
    console.log(this.state.searchInput);
};
handlenovelclick = (event)=>{
    event.preventDefault();
    let newNovel = this.state.novels[0].filter((novels)=>{
        return novels.id === event.target.parentNode.dataset.id;
    });
let title = newNovel[0].volumeInfo.title;
let authors = newNovel[0].volumeInfo.authors;
    let description = newNovel[0].volumeInfo.description;
    let image = newNovel[0].volumeInfo.imageLinks.thumbnail;
    let link = newNovel[0].volumeInfo.infoLink;
    let publisher = newNovel[0].volumeInfo.publisher;
    let publishedDate = newNovel[0].volumeInfo.publishedDate;
    this.setState({
        title: title,
        authors: authors,
        description: description,
        image: image,
        link: link,
        publisher: publisher,
        publishedDate: publishedDate,
    },
    () => api.saveNovel({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link,
        publisher: this.state.publisher,
        publishedDate: this.state.publishedDate
    })
    );
    alert (`Save Successful`);
};
render() {
    return(
       
          <div className = "tdbc-hero">
            <NavTabs  />
            </div>,
      <Row>
        
            <SearchForm />
            <NovelCard />
     </Row>
    )
}
};
