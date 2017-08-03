import React, { Component } from 'react';
import './App.css';
import RandomPeople from './components/RandomPeople';
import axios from 'axios';
import Image from './components/Images';
const PEOPLE_URL= `https://randomuser.me/api/`;


class App extends Component {
   constructor(props){


     super(props);

     this.state={
       cell:0,
       picture:''

     }
       this.getPeople();
   }


getPeople=()=>{
    axios.get(PEOPLE_URL)
    .then((response)=>{
        
        this.setState({
          cell: response.data.results[0],
          picture: response.data.results[0].picture
        

        },()=>
      console.log(this.state.cell))
    })
}
  render() {
    return (
      <div className="container"> 
  
    <Image value={this.state.picture}/>
    <RandomPeople value={this.state.cell}/>
    

    </div>
    );
  }
}

export default App;
