//this renders random text and random image from two APIs

//before API demo, choose two API sources and go through the docs with the students, testing the get requests from postman

//use fetch instead of axios, so that the students get exposure to the fetch API.

//Notice that fetch requires the use of res.json() to access the data. Axios handles this under the hood.

import React from 'react';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      text: '',
      image: ''
    }
    this.getStuff = this.getStuff.bind(this)
    this.getPic = this.getPic.bind(this)
  }
  componentDidMount(){
    this.getStuff()
    this.getPic()
  }

  getStuff(){
    fetch('http://jservice.io/api/random?count=1')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(res => {
         this.setState({
          text: res[0].answer
        })
      })
  }

  getPic(){
    fetch('https://api.jikan.moe/v3/anime/1/pictures')
    .then((res) => res.json())
    .then(res => {
      this.setState({
        image: res.pictures[0].small
      })
    })
  }
  render(){
    return (
      <div>
        <h1>Picture</h1>
        <h3>{this.state.text}</h3>
        <img src= {this.state.image} alt="anime" width="500" height="600" />
      </div>
      
    )
  }
}

export default App; 
