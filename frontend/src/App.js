import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import {
  Grid,
  Col,
  Row,
  PageHeader,
  PageFooter
} from 'react-bootstrap'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
    }
  } 
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Cat Tinder
                  <small className='subtitle'>Add a Cat</small>
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
                  <Col xs={4}>
                    <small>
                      <Link to='/' id='cats-link'>Add a Cat</Link>
                    </small>
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
