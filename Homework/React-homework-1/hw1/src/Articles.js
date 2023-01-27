import "./App"
import "./index";
import React from "react";
import {App, items} from "./App";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./Articles.css";
function Articles(props) {
  const posts = props.items&& props.items.map((element,id) => (
    <Col key={id}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={element.src} />
            <Card.Body >
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.preview} </Card.Text>
                <Card.Text> <small >{element.createDate}</small></Card.Text>
                <Button variant="primary">더 보기</Button>
            </Card.Body>
        </Card>
    </Col>
 ) );
 return (
     <div className="posts">
    <Row xs={4} md={2} className="g-4"> 
    {posts}
</Row>
</div>
);
};
export default Articles;