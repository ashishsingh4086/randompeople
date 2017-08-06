import React, { Component } from 'react';
import './App.css';
import RandomPeople from './components/RandomPeople';
import axios from 'axios';
import Image from './components/Images';
const PEOPLE_URL = `https://randomuser.me/api/`;

class App extends Component {
  constructor(props) {  //calling constructor to initiate state
    super(props);

    this.state = {  //we need two states here. All the details of the people and image
      info: 0,
      picture: ''

    }
    this.getPeople(); //call the function getPeople when the DOM is ready. 
  }

  getPeople = () => {
    axios.get(PEOPLE_URL) //ajax call using axios.
      .then((response) => {
        this.setState({
          info: response.data.results[0],
          picture: response.data.results[0].picture
        }, () =>
            console.log(this.state.info))
      })
  }
    /*
    * Request state changes from two components. Images and Random people datails.
    */
  render() {
    return (
      <div className="container">
        <Image value={this.state.picture} />
        <RandomPeople value={this.state.info} />
      </div>
    );
  }
}

export default App;
