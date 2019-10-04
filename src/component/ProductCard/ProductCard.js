import React from 'react';
import { CardDeck, Card, Dropdown } from 'react-bootstrap';
import classes from './ProductCard.css';

const ProductCard = (props) => {
  

    return (
        <div>
        <CardDeck>
            <Card className={classes.ProductCard}>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.text}</Card.Text>
                    <Card.Text>{product.airflow}</Card.Text>
                    <Card.Text>{product.maxpower}</Card.Text>
                    <Card.Text>{product.sound}</Card.Text>
                    <Card.Text>{product.diameter}</Card.Text>
                    <Card.Text><Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Add to
  </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></Card.Text>
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
                    <Card.Text><Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Add to
  </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></Card.Text>
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
                    <Card.Text><Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Add to
  </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></Card.Text>
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
                    <Card.Text><Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Add to
  </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></Card.Text>
                </Card.Body>
            </Card>

        </CardDeck>
        </div>
    );
}

export default ProductCard;
