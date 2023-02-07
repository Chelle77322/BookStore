import React from "react";
import {Container} from 'react-bootstrap';
import Jumbotron from "../components/Jumbo.jsx";
import NovelCard from "../components/NovelCard.jsx";
import SearchContainer from "../components/SearchContainer.jsx";

const Search = (props)=> {
    return (
        <div className = {props.src}>
            <Jumbotron title = {props.title}/>
            <Container className = "main">
                <div className="card p-3 mt-3">
                <SearchContainer
                handleinputchange={props.handleinputchange}
                handleformsubmit={props.handleformsubmit}
                />
                </div>
            </Container>
            <NovelCard
            novels={props.novel}
            handlenovelclick={props.handlenovelclick} as={props.as}
            type={props.type}
            value={props.value}
            variant={props.variant}
            className={props.classes}
            size={props.size}
            />
        </div>
    );
};
export default Search