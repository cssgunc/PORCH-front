import React from 'react';
import PropTypes from 'prop-types';



export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }


  render() {
    let user = this.state.user
    let viewComponent = <h1>Loading...</h1>
    if (user == "volunteer") viewComponent = <Volunteer/>
    if (user == "donor") viewComponent = <Donor/>

    return(
      <div>
        <h1>This is home page</h1>
        { viewComponent }
      </div>

    )
  }
} 

class Donor extends React.Component {
  // include dashboard, submit
  render() {
    return(
      <h1>This is donor's home page</h1>
    )
  }
}

class Volunteer extends React.Component {
  // include dasboard, start page, submit page
  render() {
    return(
      <h1>This is volunteer's home page</h1>
    )
  }
}

class Dashboard extends React.Component {
  render() {
    return(
      <h2> This is the start of the dashboard</h2>
    )
  }
}