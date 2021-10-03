import React, { Component } from "react";
import { Formik } from "formik";
import axios from 'axios';




const Form = () =>{
    return(
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
                        const feedback = { values };
                        axios.post('https://gallery-app-f6a2d-default-rtdb.firebaseio.com/feedback.json', feedback)
                            .then(response => response.data)
                            .then(err => console.log(err));

                            console.log(values);
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
                                height:'30%',
                                width:"50%",
                                margin:"10px",
                                padding:"10px"
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
                                height:'20px',
                                width:"50%",
                                margin:"10px",
                                padding:"30px"
                            }}
                        />

                        <br />

                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>)}

            </Formik>
        </div>
    );
}

export default Form;