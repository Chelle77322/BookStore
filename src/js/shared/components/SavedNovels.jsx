import React from "react";
import {Card, Button} from "react-bootstrap";

const SavedNovels = (props) => {
    return (
        <Card className = "mb-4">
            <Card.Header>
                <strong>Title: {props.novel.title}</strong>{"/"}Author(s):{" "}
                {props.novel.authors}
            </Card.Header>
            <Card.Body>
                <div className = "float-left m-2">
                    <Card.Img
                    src={props.title.image}
                    alt={props.novel.title +" cover image"}
                    />
                </div>
                <Card.Text>{props.novel.description}</Card.Text>
                <Card.Text>Publisher:{props.novel.publisher}{";"} {props.novel.publishedDate}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={props.novel.link}>More Information</Card.Link>{" "}
                <Button className = "float-right mb-2" variant="alert"
                size= "sm"
                data-id={props.novel._id}
                onClick={() => props.removeNovel(props.novel._id)}>
                    {" "}
                    REMOVE{" "}
                </Button>
            </Card.Footer>
        </Card>
    )
}
export default SavedNovels;