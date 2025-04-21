import React from "react";
import Jumbotron from "../components/Jumbo.jsx";
import SaveContainer from "../components/SaveContainer.jsx";

const Saved = (props)=> {
    return (
        <div>
            <Jumbotron title = {props.title}/>
            <SaveContainer />
        </div>
    );
};
console.log(Saved);
export default Saved;
