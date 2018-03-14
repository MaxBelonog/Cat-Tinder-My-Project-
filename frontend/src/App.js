import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import {
  Button,
  NavDropdown,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  Col,
  Row,
  Grid,
  PageHeader,
  Carousel
} from 'react-bootstrap'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      cats: [],
      NewCatSuccess: fales,
      errors: null
    }
  } 
  //  componantWillMount..,on rendering...


  handleNewcat(params) {
    console.log(this.state.errors)
      fetch(`${this.state.apiUrl}/cats`,
        {
          body: JSON.stringify(params),  // <- we need to stringify the json for fetch
          headers: {  // <- We specify that we're sending JSON, and expect JSON back
            'Content-Type': 'application/json'
          },
          method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
        }
      )
      .then((rawResponse) => {
         return rawResponse.json()
      })
      .then((parsedResponse) => {
        if (parsedResponse.errors) { // <- Check for any server side errors
          this.setState({ errors: parsedResponse.errors })
        }else{
          const cats = Object.assign([], this.state.cats)
          cats.push(parsedResponse.cat) // <- Add the new cat to our list of cats
          this.setState({
            cats: cats,  // <- Update cats in state
            errors: null,// <- Clear out any errors if they exist
            NewCatSuccess: true
          })
        }
      })
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/cats`)
      .then((rawResponse) => {
        return rawResponse.json()
      })
      .then((parsedResponse) => {
        this.setState({ cats: parsedResponse.cats })
      })
  }








   
  render() {
    return (
      <Router>
      <div>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?auto=format&fit=crop&w=1050&q=80" height="900px" width="500px" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?auto=format&fit=crop&w=1050&q=80" height="900px" width="500px" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?auto=format&fit=crop&w=1050&q=80" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
        <div>
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Cat Tinder
                    <small className='subtitle'>
                      Add a Cat
                    </small>
                  </Col>
                  <Col xs={4}>
                    <small>
                      <Link to='/cats' id='cats-link'>Back to main Page</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
            </Grid>
          )} />

          <Route exact path="/cats" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Cat Tinder
                    <small className='subtitle'>All the Cats</small>
                  </Col>
                </Row>
              </PageHeader>
               <div>
                <Cats cats={this.state.cats} />
               </div> 
            </Grid>
          )} />
          <Route exact path="/newcats" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Cat Tinder
                    <small className='subtitle'>Back to See all the Mambers</small>
                  </Col>
                  <Col xs={4}>
                    <small>
                      <Link to='/' id='cats-link'>create PROFILE Page</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
                <NewCat newcat={this.state.newcats} />
            </Grid>
          )} />
          <Grid>
            <div className='Footer'>
              <p>©  Copyright 2018 Max Belonog, Inc.</p>
            </div>
          </Grid>
 
        </div>
       
      </Router>
    )
  }
}    

export default App;
