import React, {Component} from "react";
import Jumbotron from "../components/Jumbo.jsx";
import API from "../utils/api.js";
import SaveContainer from "../components/SaveContainer.jsx";
import "../../../styles/main-style.scss";

export default class Saved extends Component{

    state= {
        savedNovels: []
    }
    componentDidMount = () =>{
        this.getNovels()
    }
    deleteGoogleNovel = currentNovel => {
        API.deleteNovel (currentNovel.id).then(result => {
            console.log("You have removed this book from your saved list", result);
            this.getNovels();
        }).catch(error => {
            console.log("Investigate cause of error",error);
        })
    }
    getNovels = () => {
        API.getNovels().then (result => {
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
                <h2> Saved Books Page</h2>
                {this.state.savedNovels.length?(
                    <SaveContainer
                    novelState = {this.state.savedNovels}
                    deleteGoogleNovel = {this.deleteGoogleNovel}></SaveContainer>
                ): (
                    <h5>No results to display</h5>
                )}
                
            </div>
        )
    }
}
