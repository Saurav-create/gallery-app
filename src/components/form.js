import React, { Component } from "react";
import { Formik } from "formik";
import axios from 'axios';
import { connect } from "react-redux";
import { Button, Modal, ModalBody } from 'reactstrap';
import Spinner from './Spinner/Spinner.js';








class Form extends Component {

    state = {
        isLoading: false,
    }

    goBack = () => {
        this.props.history.goBack('form.js');
    }


    render() {

        const form = (
            <div>
                <Formik
                    initialValues={
                        {
                            name: '',
                            feedback: ''

                        }
                    }
                    onSubmit={
                        (values) => {
                            this.setState({
                                ...this.state,
                                isLoading: true,
                            })
                            const feedback = { values };

                            if(feedback.values.feedback!= "" && feedback.values.name!=""){
                                axios.post('https://gallery-app-f6a2d-default-rtdb.firebaseio.com/feedback.json', feedback)
                                .then(response => {
                                    if (response.status === 200) {
                                        this.setState({
                                            isLoading: false,
                                        });
                                        alert("Feedback Submitted Successfully");
                                        console.log(feedback);
                                    }
                                    else {
                                        this.setState({
                                            isLoading: false,
                                        });
                                    }
                                })
                                .then(err => console.log(err));

                            }
                            else{
                                alert("Please enter all the information");
                                this.setState({
                                    isLoading: false,
                                });
                            }


                            

                        }
                    }

                >

                    {({ values, handleChange, handleSubmit }) => (<div style={{
                        border: "1px grey solid",
                        padding: "15px",
                        borderRadius: "7px",
                        width: "70%",
                        alignItems: "center",
                        marginLeft: "15%"
                    }}>

                        <br />
                        <br />

                        <form onSubmit={handleSubmit} >
                            <label>Name</label>

                            <input
                                name="name"
                                placeholder="Enter Your Name"
                                className="form-control"
                                value={values.name}
                                onChange={handleChange}
                                style={{
                                    height: '30%',
                                    width: "50%",
                                    margin: "10px",
                                    padding: "10px"
                                }}
                            />

                            <br />
                            <label>Feedback</label>
                            <input
                                name="feedback"
                                placeholder="Give your Feedback"
                                className="form-control"
                                value={values.feedback}
                                onChange={handleChange}
                                style={{
                                    height: '20px',
                                    width: "50%",
                                    margin: "10px",
                                    padding: "30px"
                                }}
                            />

                            <br />

                            <Button type="submit" className="btn btn-success">Submit</Button>
                        </form>

                    </div>)}

                </Formik>
                <br />
                <hr />
            </div>
        );




        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
            </div>
        );
    }
}

export default Form;