import React, { Component } from "react";
import { Button } from 'reactstrap';
import { Formik } from "formik";
import { auth } from './redux/actionCreators';
import { connect } from 'react-redux';







const mapDispatchToProps = (dispatch) => {
    console.log("mapDispathTOProps");
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}

class Login extends Component {

    state = {
        mode: "login",
    }

    // handleSubmit=(e)=>{
    //     e.preventDefault();
    // }


    render() {

        let formMode = null;

        if (this.state.mode !== "login") {
            formMode = (
                <div>
                    <Formik
                        initialValues={
                            {
                                email: "",
                                password: "",
                                confirmPassword: ""
                            }
                        }

                        onSubmit={
                            async (values) => {
                                // (e)=> e.preventDefault(e);
                                this.props.auth(values.email, values.password, this.state.mode);
                                console.log("onsubmit");
                                console.log(values.email, values.password, this.state.mode,"console");
                            }
                        }

                        validate={
                            async(values) => {
                                let errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address';
                                }

                                if (!values.password) {
                                    errors.password = 'Required';
                                } else if (values.password.length < 4) {
                                    errors.password = 'Must be atleast 4 characters!';
                                }
                                if (this.state.mode === "Sign Up") {
                                    if (!values.confirmPassword) {
                                        errors.confirmPassword = 'Required';
                                    } else if (values.password !== values.confirmPassword) {
                                        errors.confirmPassword = 'Password field does no match!';
                                    }
                                }


                                return errors;
                            }
                        }
                    >{(values, handleChange, handleSubmit, errors) => (
                        <div style={{
                            marginTop: "10%",
                            border: "1px grey solid",
                            padding: "15px",
                            borderRadius: "7px",
                            width: "70%",
                            height: "80%",
                            alignItems: "center",
                            marginLeft: "15%"
                        }}>
                            <form>
                                <label>Email :</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={values.email}
                                    className='form-control'
                                    onChange={handleChange}
                                    style={{
                                        margin: "10px",
                                        padding: "10px",
                                        border: "2px solid cyan"
                                    }}
                                />
                                <br />
                                {/* <span style={{ color: "red" }}>{errors.email}</span> */}
                                <br />
                                <label>Password :</label>
                                <input
                                    type='password'
                                    placeholder="Enter Password"
                                    value={values.password}
                                    className='form-control'
                                    onChange={handleChange}
                                    style={{
                                        margin: "10px",
                                        padding: "10px",
                                        border: "2px solid cyan"
                                    }}

                                />
                                <br />
                                {/* <span style={{ color: "red" }}>{errors.password}</span> */}
                                <br />
                                <label>Confirm Password :</label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={values.confirmPassword}
                                    className='form-control'
                                    onChange={handleChange}
                                    style={{
                                        margin: "10px",
                                        padding: "10px",
                                        border: "2px solid cyan"
                                    }}
                                />
                                <br />
                                {/* <span style={{ color: "red" }}>{errors.confirmPassword}</span> */}

                                <button type="submit" className="btn btn-success" >{this.state.mode === "login" ? "Login" : "Sign Up"}</button>
                              
                            </form>
                          
                        </div>
                    )}

                    </Formik>


                </div>
            )
        }

        else {
            formMode = (
                <div>
                    <Formik
                        initialValues={
                            {
                                email: "",
                                password: "",

                            }
                        }
                    >{(values, handleChange, handleSubmit) => (
                        <div style={{
                            marginTop: "10%",
                            border: "1px grey solid",
                            padding: "15px",
                            borderRadius: "7px",
                            width: "70%",
                            height: "80%",
                            alignItems: "center",
                            marginLeft: "15%"
                        }}>
                            <form >
                                <label>Email :</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={values.email}
                                    className='form-control'
                                    onChange={handleChange}
                                    style={{
                                        margin: "10px",
                                        padding: "10px",
                                        border: "2px solid cyan"
                                    }}
                                />
                                <br />
                                <br />
                                <label>Password :</label>
                                <input
                                    type='password'
                                    placeholder="Enter Password"
                                    value={values.password}
                                    className='form-control'
                                    onChange={handleChange}
                                    style={{
                                        margin: "10px",
                                        padding: "10px",
                                        border: "2px solid cyan"
                                    }}

                                />
                                <br />
                                <br />

                                <button type="submit" className="btn btn-success"  >{this.state.mode === "login" ? "Login" : "Sign Up"}</button>
                               
                            </form>
                            
                        </div>
                    )}

                    </Formik>


                </div>
            )
        }


        const toggleMode = () => {
            this.setState({
                ...this.state,
                mode: this.state.mode === "login" ? "signup" : "login"
            })
        }



        return (
            <div>
                <Button
                    style={{
                        width: "50%",
                        padding: "15px",
                        marginTop: "10px",
                        backgroundColor: "green",
                        borderRadius: "5px"
                    }}
                    onClick={toggleMode}
                >
                    {this.state.mode === "login" ? "Switch to Sign-Up" : "Switch to Login"}
                </Button>
                {formMode}
            </div>
        )
    }






}


export default connect(null, mapDispatchToProps)(Login);