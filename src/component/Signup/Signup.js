import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import styles from "../Signup/Signup.modules.css";
import img from './logo.png';



class Signup extends Component {

    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            retypedPassword: '',
            submitted: false,
            loading: false,
            error: '',
            email: '',
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
        const { username, password, retypedPassword, email } = this.state;
        console.log("Username: " + username + " Email: " + email + " Password: " + password + " Retyped Password: " + retypedPassword)
        // stop here if form is invalid
        if (!(username && password && email)) {
            return;
        }
        else if (password !== retypedPassword) {
            return;
        }


    }

    render() {
        const { username, password, submitted, loading, error, retypedPassword, email } = this.state;
        return (
            <Container id="gradient">
                <Row>
                <Col>
                            <div className={styles["col-md-4"]}></div>
                        </Col>
                    <Col>
                        <div className="col-md-4">
                            <div id="signupInfo">
                            <Link to={"/signup"}>
                                <p>
                                    Login
                                </p>
                            </Link>
                            <div id="logo">
                            <img src={img} alt="jooleLogo"></img>
                                </div>
                                <div id="slogan">
                            <h4>Building Product Selection Platform</h4>
                            </div>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                    {submitted && !email &&
                                        <div className="help-block">Email is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password">Confirm Password</label>
                                    <input type="password" className="form-control" name="retypedPassword" placeholder="Retype Password" value={retypedPassword} onChange={this.handleChange} />
                                    {submitted && retypedPassword !== password &&
                                        <div className="help-block">Passwords are not the same!</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" disabled={loading}>Submit</button>
                                </div>
                                {submitted && retypedPassword === password &&
                                    <div className="help-block">
                                        <p>User account created!</p>
                                        <p><Link to="/">
                                            <button className="btn btn-primary" disabled={loading}>
                                                Proceed to Login
                    </button>
                                        </Link></p>
                                    </div>
                                }
                                {error &&
                                    <div className={'alert alert-danger'}>{error}</div>
                                }
                            </form>
                            </div>
                        </div>
                    </Col>
                    <Col>
                            <div className={styles["col-md-4"]}></div>
                        </Col>
                </Row>
            </Container>
        );
    }
}

export default Signup;