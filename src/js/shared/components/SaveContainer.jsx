import React, {Component} from "react";
import {Container} from "react-bootstrap";
import SavedNovels from "./SavedNovels.jsx";
import Home from "../pages/Home.jsx";

import api from "../utils/api.js";

class SaveContainer extends Component {
    constructor () {
        super();
        this.state = {
            novels: [],
        };
    }
    componentDidMount() {
        this.loadNovels();
    }
    loadNovels = () => {
        api.savedNovels().then((result)=> {
            this.setState({novels: result.data});
        }).catch((error)=> console.log(error));
    };
    deleteNovel = (id) => {
     api.deleteNovel(id).then((result)=>{
        alert(`This has already been deleted`);
     })
     .then((result)=> this.loadNovels()).catch((error)=> console.log(error));
    };
    makeCard = (novels, deleteNovel) => {
        return novels.map((novel) => {
            return(
                <SavedNovels
                key = {novel._id}
                novel={novel}
                deleteNovel={deleteNovel}
                />
                
            );
        });
    };
    render() {
        return (
            <Container className = "mt-3">
                {this.makeCard(this.state.novels, this.deleteNovel)}
            </Container>
        );
    }
}
export default SaveContainer
