import React from "react";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbo.jsx";
//import Search from "Search.jsx";
//import Save from "../pages/save.jsx";
import {Card, Button, Container, Row, Col} from "react-bootstrap";

const Home = (props)=> {
  return(
    <div className = {props.src}>
      
   
      <Jumbotron title={props.title}/>
      <Container className="main">
        <Row>
          <Col>
          <Card>
            <Card.Header>
              <strong>
              Search <span className="blue">G</span>
                  <span className="red">o</span>
                  <span className="yellow">o</span>
                  <span className="blue">g</span>
                  <span className="green">l</span>
                  <span className="red">e</span> Books
              </strong>
            </Card.Header>
            <Card.Body>
              <Card.Text className = "text-justify">
              Click on this link to start you search
              <span className="blue">G</span>
                  <span className="red">o</span>
                  <span className="yellow">o</span>
                  <span className="blue">g</span>
                  <span className="green">l</span>
                  <span className="red">e</span> Books API for your favorite
                  titles.

              </Card.Text>
              <div className = "text-center">
                <Link to = "./Search">
                  <Button variant="success">SEARCH</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Header>
              {" "}
              <strong>
                Saved <span
                className="blue">G</span>
                <span className="red">o</span>
                <span className="yellow">o</span>
                <span className="blue">g</span>
                <span className="green">l</span>
                <span className="red">e</span> Books
              </strong>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-justify">
                Click on the link to see the books you have saved to your {" "}
                <span className="blue">G</span>
                  <span className="red">o</span>
                  <span className="yellow">o</span>
                  <span className="blue">g</span>
                  <span className="green">l</span>
                  <span className="red">e</span> bookstore
              </Card.Text>
              <div className = "text-center">
                <Link>
                  <Button variant = "warning">SAVED</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
          </Col>
        </Row>
    
      </Container>
    </div>
  )
}
export default Home;