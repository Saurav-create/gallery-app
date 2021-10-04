import React, { Component } from "react";
import { Formik } from "formik";
import axios from 'axios';
import { connect } from "react-redux";
import { Button, Modal, ModalBody } from 'reactstrap';
import Spinner from './Spinner/Spinner.js';








class Form extends Component {

    state = {
        isLoading: false,
        isModalOpen: false,
        modalMsg: '',
    }

    goBack = () => {
        this.props.history.goBack('form.js');
    }


    render() {

        const form = (
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
                        axios.post('https://gallery-app-f6a2d-default-rtdb.firebaseio.com/feedback.json', feedback)
                            .then(response => {
                                if (response.status === 200) {
                                    this.setState({
                                        isLoading: false,
                                        isModalOpen: true,
                                        modalMsg: 'Feedback Submitted Successfully!',
                                    });
                                   console.log(this.state);
                                }
                                else {
                                    this.setState({
                                        isLoading: false,
                                        isModalOpen: true,
                                        modalMsg: 'Something Went Wrong! Try Again',
                                    });
                                }
                            })
                            .then(err => console.log(err));


                    }
                }

            >

                {({ values, handleChange, handleSubmit }) => (<div style={{
                    border: "1px grey solid",
                    padding: "15px",
                    borderRadius: "7px",
                }}>

                    <br />
                    <br />

                    <form onSubmit={handleSubmit} >

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
        );




        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} >
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default Form;