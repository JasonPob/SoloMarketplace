import React, { Component } from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import { Col, Row, Container } from 'react-bootstrap';
import styles from "../Searchbar/Searchbar.modules.css";
import img from './logo.png';


class Searchbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    options = [
        { key: 'Mechanical', text: 'Mechanical', value: 'Mechanical' },
        { key: 'Option 2', text: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', text: 'Option 3', value: 'Option 3' },
    ]
    style = {
        width: '100%',
    };

    handleChange(e) {
        e.preventDefault();
        const { search, value } = e.target;
        this.setState({ [search]: value });
        console.log(this.search)
    }

    handleSubmit(e) {
        // e.preventDefault();
        this.setState({ submitted: true });
        const { search } = this.state;
        console.log("Submitting");
        console.log("search value: " + search);

        if (search === '') {
            return;
        }
        if (search === "HVAC") {
            this.props.history.push('/products')
        }
    };

    render() {

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
                                <form onSubmit={this.handleSubmit}>
                                    <div id="searchbar">
                                        <Input
                                            onChange={this.handleChange}
                                            search=""
                                            style={this.style}
                                            label={<Dropdown defaultValue='Mechanical' options={this.options} />}
                                            labelPosition='left'
                                            placeholder='Search...'
                                            icon="search"
                                            onClick={this.handleSubmit}
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
}


export default Searchbar;

