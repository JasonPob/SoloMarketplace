import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from "../Login/Login.modules.css";
import {Col, Row, Container} from 'react-bootstrap';


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
        console.log( "Username: " + username + " Password: " + password);

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }


    }

    render() {
        const { username, password, submitted, loading, error } = this.state;
        return (
            <>
            <Container id="gradient">
                <Row>
                    <Col>
            <div className={styles["col-md-4"]}></div>
            </Col>
            <Col>
            <div className={styles["col-md-4"]}>
                <Link to ={"/signup"}>
                    <p>
                        Sign Up
                    </p>
                </Link>
                <img src="../../assets/jooleLogo.png" alt="JooleLogo"></img>
                <h4>Building Product Selection Platform</h4>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Username or Email" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" disabled={loading}>Login</button>
                    </div>
                    {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    }
                </form>
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