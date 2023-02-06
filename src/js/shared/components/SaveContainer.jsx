import React, {Component} from "react";
import {Container} from "react-bootstrap";
import SavedNovels from "./SavedNovels.jsx";

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
    removeNovel = (id) => {
     api.removeNovel(id).then((result)=>{
        alert(`This has already been deleted`);
     })
     .then((result)=> this.loadNovels()).catch((error)=> console.log(error));
    };
    makeCard = (novels, removeNovel) => {
        return novels.map((novel) => {
            return(
                <SavedNovels
                key = {novel._id}
                novel={novel}
                removeNovel={removeNovel}
                />
                
            );
        });
    };
    render() {
        return (
            <Container className = "mt-3">
                {this.makeCard(this.state.novels, this.removeNovel)}
            </Container>
        );
    }
}
export default SaveContainer
