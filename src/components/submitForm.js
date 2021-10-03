import React, { Component } from 'react';
import { Formik } from "formik";
import axios from 'axios';


class submitForm extends Component {

    render(){
        
      
          let  form= (
                <Formik
                    initialValues={
                        {
                            name: '',
                            feedback: ''
                           
                        }
                    }
                    onSubmit={
                        (values) => {
                            const feedback= {values};
                            axios.post('https://gallery-app-50da8-default-rtdb.firebaseio.com/' ,feedback)
                            .then(response=> response.data)
                            .then(err=> console.log(err));
                            
                        }
                    }
                   
                >

                    {({ values, handleChange, handleSubmit}) => (<div  style={{
                            border: "1px grey solid",
                            padding: "15px",
                            borderRadius: "7px",
                        }}>
                        
                            <br/>
                            <br/>

                        <form onSubmit={handleSubmit}>
                            <input
                                name="name"
                                placeholder="Enter Your Name"
                                className="form-control"
                                value={values.name}
                                onChange={handleChange}
                            />
                           
                            <br />
                            <input
                                name="feedback"
                                placeholder="Password"
                                className="form-control"
                                value={values.feedback}
                                onChange={handleChange}
                            />
                         
                            <br />
                         
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>)}

                </Formik>
            )

            return (
                <div>
                    {form}
                    {/* <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                        <ModalBody>
                            <p>{this.state.modalMsg}</p>
                        </ModalBody>
    
                    </Modal> */}
                </div>
            );
    }
} 


export default submitForm;
