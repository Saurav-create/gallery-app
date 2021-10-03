import React from "react";
import {
    Card, CardImg, CardBody,
} from 'reactstrap';

import submitForm from "./submitForm";


const Cardpic = (props) => {
    return (
        <div>
            <Card style={{padding: "10px", margin: "10px"}}>
                <CardImg top width="50%" src={props.src} alt="Card image cap" style={{
                    border: "5px solid black",
                    borderRadius: "5px",
                    
                }} />
                <CardBody>
                    
                </CardBody>
                
            </Card>
        </div>
    );
}

export default Cardpic;