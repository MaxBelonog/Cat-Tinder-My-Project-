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
      NewCatSuccess: "",
      errors: null
    }
    
  } 
  /*
 * componentWillMount fires everytime the component is rendered
 * to the dom
 */
  componentWillMount() {
    fetch(`${this.state.apiUrl}/cats`)
      .then((rawResponse) => {
        return rawResponse.json()
      })
      .then((parsedResponse) => {
        console.log(parsedResponse.cats)
        this.setState({ cats: parsedResponse.cats })
      })
    
  }
  

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
    .then((parsedResponse) => {
      if (parsedResponse.errors) {
        this.setState({ errors: parsedResponse.errors })
      }else{
        const cats = Object.assign([], this.state.cats)
        cats.push(parsedResponse.cat)
        this.setState({
          cats: cats,
          errors: null,
          newCatSuccess: true // <- This is the new flag in state
        })
      }
    })
  }










   
  render() {
    

    return (
      <Router>
        <div>
          
          <div>
            <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#brand">Cat tinder</a>
                    </Navbar.Brand>
                      <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                          Home 
                        </NavItem>
                        <NavItem eventKey={2} href="/cats">
                          MEOW to List
                        </NavItem>
                       <NavDropdown eventKey={3} title="Meows Profile" id="basic-nav-dropdown">
                          <MenuItem eventKey={3.1}>profile Page</MenuItem>
                          <MenuItem eventKey={3.2}>edit</MenuItem>
                          <MenuItem eventKey={3.3}>signOut</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={3.3}>Privecy</MenuItem>
                        </NavDropdown>
                    </Nav>
                    
                  </Navbar.Collapse>
            </Navbar>
          </div>
          <div className = 'Carousel'>
          <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/portrait-of-lion-in-black-and-white-ii-lukas-holas.jpg" />              <Carousel.Caption>
                <h3>Leonard Goof the 1st</h3>
                <p>loves going to work with his owner.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  alt="900x500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRKcZYRl6UxubwT6ZOVUSNfnrtzIG_b8ZP8jtc3dl-alVrT-G" />
              <Carousel.Caption>
                <h3>Thinkil Overloadova</h3>
                <p>She convenset that she is good, and we all here to surv her highness.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-JB_eHlfaRuL7EcZ_xoReQcTuGGubjtcUTgvPZBlNKcPnlqv" />              
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>;
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
                        <Link to='/' id='cats-link'>Back to main Page</Link>
                      </small>
                    </Col>
                  </Row>
                </PageHeader>
              </Grid>
            )} />
          </div>
          <div>
              <Route exact path="/cats" render={props => (
                <Grid>
                  <PageHeader>
                    <Row>
                      <Col xs={8}>
                        Cat Tinder
                        <small className='subtitle'>To See few of our Mewo</small>
                      </Col>
                    </Row>
                  </PageHeader>
                    <div>
                    <Cats cats={this.state.cats} />
                    </div> 
                </Grid>
              )} />
            </div>
            <div>
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
          <div>
            <Route exact path="/cats" render={props => (
              <Grid>
                <PageHeader>
                  <Row>
                    <Col xs={8}>
                      Cat Tinder
                      <small className='subtitle'>
                        All the Cats
                      </small>
                    </Col>
                  </Row>
                </PageHeader>
                
                <Cats cats={this.state.cats} />
                <NewCat
                  onSubmit={this.handleNewcat.bind(this)}
                  errors={this.state.errors && this.state.errors.validations}
                />
              </Grid>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}    

export default App;
