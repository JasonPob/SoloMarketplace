import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "../Login/Login.modules.css";
import { Col, Row, Container } from 'react-bootstrap';
import img from './logo.png';
import  { Redirect } from 'react-router-dom'


class Login extends Component {

    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, } = this.state;
        console.log("Username: " + username + " Password: " + password);

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }
        else {
            this.props.history.push('/search')
        }
    }

    render() {
        const { username, password, submitted, loading, } = this.state;
        return (
            <>
                <Container id="gradient">
                    <Row>

                        <Col>
                            <div className={styles["col-md-4"]}></div>
                        </Col>

                        <Col>
                            <div className={styles["col-md-4"]}>
                                <div id="loginContainer">
                                    <div id="signupDiv">
                                        <Link to={"/signup"}>
                                            <p>
                                                Sign Up
                    </p>
                                        </Link>
                                    </div>
                                    <br></br><br></br>
                                    <div id="logo">
                                        <img src={img} alt="jooleLogo"></img>
                                    </div>
                                    <br /><br />
                                    <h5 id="slogan">Building Product Selection Platform</h5>
                                    <br />
                                    <br />
                                    <form name="form" onSubmit={this.handleSubmit}>
                                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                            <input type="text" className="form-control" name="username" placeholder="Username or Email" value={username} onChange={this.handleChange} />
                                            {submitted && !username &&
                                                <div className="help-block" id="error">Username is required</div>
                                            }
                                        </div>
                                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                            <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                            {submitted && !password &&
                                                <div className="help-block" id="error">Password is required</div>
                                            }
                                        </div>
                                        <br></br>
                                        <div className="form-group">


                                            <button className="btn btn-primary" disabled={loading}>Login</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>


                        <Col>
                            <div className={styles["col-md-4"]}></div>
                        </Col>

                    </Row>
                </Container>

            </>
        );
    }
}

export default Login;