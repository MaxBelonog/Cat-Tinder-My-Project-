import React, { Component } from 'react';
import {
    Col,
    ControlLabel,
    FormGroup,
    FormControl,
    Row,
    Button
} from 'react-bootstrap'

class NewCat extends Component {
    render() {
        return (
            <form>
                <Row>
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel id="name">Name</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel id="age">Age</ControlLabel>
                            <FormControl type="number" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel id="enjoys">Enjoys</ControlLabel>
                            <FormControl componentClass='textarea' />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <Button id="submit" >Create Cat Profile</Button>
                    </Col>
                </Row>
            </form>
             
        )
    }

}

export default NewCat
