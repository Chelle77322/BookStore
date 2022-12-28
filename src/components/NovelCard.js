//Show the book
import React from "react";
const styles = {
    image:{
        margin: 15,
        height: "50%",
        width: "55%"
    }
}
function NovelCard(props){
    return (
        <div className="col-lg-3" id={props.id}
        key={props.id}>
            <div className="img-container">
                <h5>{props.title}</h5>
                <h5>{props.authors}</h5>
                <img alt = {props.title}
                src={props.image}
                style={styles.image}/>
                <p> <a href = {props.link}>Book Details</a></p>
                <p className="lead" onClick = { () => props.handlesaveclick (props)}>Save the Book</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default NovelCard;