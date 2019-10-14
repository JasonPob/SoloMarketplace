import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import { Col, Row, Container } from 'react-bootstrap';
import styles from "../Searchbar/Searchbar.modules.css";
import img from './logo.png';


const Searchbar = () => {
    const options = [
        { key: 'Mechanical', text: 'Mechanical', value: 'Mechanical' },
        { key: 'Option 2', text: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', text: 'Option 3', value: 'Option 3' },
    ]
    var style = {
        width: '100%',
    };

    let handleSubmit = () => {
        console.log("asad")
    };


    return (
        <Container>
            <Row>
                <Col><div className={styles["col-md-4"]}></div></Col>

                <Col>
                    <div className={styles["col-md-4"]}>
                        <div id="searchbarContainer">
                            <br></br><br></br>
                            <div id="logo">
                                <img src={img} alt="jooleLogo"></img>
                            </div>
                            <br /><br />
                                    <h5 id="slogan">Building Product Selection Platform</h5>
                                    <br />
                                    <br />
                            <form onSubmit={handleSubmit}>
                                <div id="searchbar">
                                    <Input
                                        style={style}
                                        label={<Dropdown defaultValue='Mechanical' options={options} />}
                                        labelPosition='left'
                                        placeholder='Search...'
                                        icon="search"
                                        action={{ icon: "search" }}>
                                    </Input>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>

                <Col><div className={styles["col-md-4"]}></div></Col>
            </Row>
        </Container>
    )
}


export default Searchbar

