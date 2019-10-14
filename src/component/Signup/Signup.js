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
                        <div className={styles["col-md-4"]}>
                            <div id="signupContainer">
                                <div id="loginDiv">
                                    <Link to={"/"}>
                                        <p>
                                            Login
                                </p>
                                    </Link>
                                </div>
                                <br></br><br></br>
                                <div id="logo">
                                    <img src={img} alt="jooleLogo"></img>
                                </div>
                                <h4 id="instructions">Create a user account</h4>
                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                        <div id="label">
                                            <label htmlFor="username">Username</label>
                                        </div>
                                        <input type="text" className="form-control" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
                                        {submitted && !username &&
                                            <div className="help-block" id="error">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                        <div id="label">
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <input type="text" className="form-control" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                        {submitted && !email &&
                                            <div className="help-block" id="error">Email is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <div id="label">
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                        {submitted && !password &&
                                            <div className="help-block" id="error">Password is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <div id="label">
                                            <label htmlFor="password">Confirm Password</label>
                                        </div>
                                        <input type="password" className="form-control" name="retypedPassword" placeholder="Retype Password" value={retypedPassword} onChange={this.handleChange} />
                                        {submitted && retypedPassword === password &&
                                            <div className="help-block" id="error">Passwords are not the same!</div>
                                        }
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <button className="btn btn-primary" disabled={loading}>Submit</button>
                                    </div>
                                    {submitted && retypedPassword === password &&
                                        <div className="help-block">
                                            <p>User account created!</p>
                                            <br></br>
                                            <p><Link to="/">
                                                <br></br>
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