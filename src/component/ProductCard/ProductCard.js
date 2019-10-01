import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const ProductCard = (props) => {
let product = {
    title: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
    airflow: "5,467 CFM",
    maxpower: "21.14 W at max speed ",
    sound: "35 dBAat max speed",
    diameter: "60 fan sweep diameter"

}

    return (
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.text}</Card.Text>
                    <Card.Text>{product.airflow}</Card.Text>
                    <Card.Text>{product.maxpower}</Card.Text>
                    <Card.Text>{product.sound}</Card.Text>
                    <Card.Text>{product.diameter}</Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.text}</Card.Text>
                    <Card.Text>{product.airflow}</Card.Text>
                    <Card.Text>{product.maxpower}</Card.Text>
                    <Card.Text>{product.sound}</Card.Text>
                    <Card.Text>{product.diameter}</Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.text}</Card.Text>
                    <Card.Text>{product.airflow}</Card.Text>
                    <Card.Text>{product.maxpower}</Card.Text>
                    <Card.Text>{product.sound}</Card.Text>
                    <Card.Text>{product.diameter}</Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.text}</Card.Text>
                    <Card.Text>{product.airflow}</Card.Text>
                    <Card.Text>{product.maxpower}</Card.Text>
                    <Card.Text>{product.sound}</Card.Text>
                    <Card.Text>{product.diameter}</Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    );
}

export default ProductCard;
