import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      stuff: []
    }
  }

  getStuff(){

    axios.get('http://localhost:9090/stuff')
      .then(res => {

        this.setState({
          stuff: res.data
        })

      }).catch(error => {

      console.log(error);

    })

  };

  addThing(){

    axios.post('http://localhost:9090/thing')
      .then(res => {

        this.setState({
          stuff: res.data
        })

      }).catch(error => {

      console.log(error);

    })

  }

  render(){
    return (
      <div>

        <h1>Woah... Docker is Cool</h1>

        <hr/>

        <button onClick={this.getStuff.bind(this)}>
          Get Stuff
        </button>

        <button onClick={this.addThing.bind(this)}>
          Add Thing
        </button>

        <h3>Stuff</h3>

        <hr/>

        <ul>
          {this.state.stuff.map((x, i) =>(
            <li key={i}>
              Thing - {x}
            </li>
          ))}
        </ul>

      </div>
    )
  }

}