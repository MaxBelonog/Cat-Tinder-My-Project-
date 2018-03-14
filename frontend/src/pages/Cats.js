import React, { Component } from 'react';
// import '../App.css';

import {
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Button,
  
} from 'react-bootstrap'

class Cats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange(event) {
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({ form: formState })
  }


  render() {
    return (
      <div className='Cats-List'>  
        <Row>
          <Col>
          <ListGroup>
            {this.props.cats.map((cat, index) =>{
              return (
                <ListGroupItem key={index} header={<h4>
                  <div className='Profile-Pic'>
                    <img src="https://dummyimage.com/100x80/61876b/fff.jpg&text=profile+pic+here" alt='cats pic' />
                  </div>
                  <span className='cat-name'>
                    {cat.name}
                  </span>
                  - <small className='cat-age'>{cat.age} years old</small></h4>
                  }>
                  <span className='cat-enjoys'>
                    {cat.enjoys}
                  </span>
                </ListGroupItem>
              )
            })}
          </ListGroup>
          </Col>
      </Row>
    </div>  
    );
  }
}

export default Cats;
