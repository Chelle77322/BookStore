import React, {Component} from "react";
import Jumbotron from "../components/Jumbo.jsx";
import api from "../utils/api.js";
import SaveContainer from "../components/SaveContainer.jsx";
import "../../../styles/main-style.scss";

export default class Saved extends Component{

    state= {
        savedNovels: []
    }
    componentDidMount = () =>{
        this.getNovels()
        console.log(this.componentDidMount);
    }
    deleteNovel = currentNovel => {
        api.deleteNovel (currentNovel.id).then(result => {
            console.log("You have removed this book from your saved list", result);
            this.getNovels();
        }).catch(error => {
            console.log("Investigate cause of error",error);
        })
    }
    getNovels = () => {
        api.getNovels().then (result => {
            this.setState ({
                savedNovels: result.data
            })
            console.log("This is your result from getNovels", result);
        }).catch(error => {
            console.log("Please investigate this error", error);
        })
    }
    render() {
        return (
            <div className = "container-fluid blend">
                <Jumbotron />
                <h2> Books Saved</h2>
                {this.state.savedNovels.length?(
                    <SaveContainer
                    novelState = {this.state.savedNovels}
                    deleteNovel = {this.deleteNovel}></SaveContainer>
                ): (
                    <h5>All Saved books have been deleted</h5>
                )}
                
            </div>
        )
    }
}
