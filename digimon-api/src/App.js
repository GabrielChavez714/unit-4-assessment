

import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Header from './Components/Header';
import Finder from './Components/Finder';
import Digivice from './Components/Digivice';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDigimon: []
    }
    this.catchDigimon = this.catchDigimon.bind(this);
  }

  componentDidMount() {
    axios.get('/api/my-digimon')
      .then(res => {
        this.setState({ myDigimon: res.data })
      })
      .catch(error => console.log(error))
  }

  catchDigimon(digimon) {
    axios.post('/api/my-digimon', { digimon: digimon })
      .then(res => {
        this.setState({ myDigimon: res.data })
      })
      .catch(error => console.log(error))
  }

  editName = (id, newName) => {
    let body = { name: newName };

    axios.put(`/api/my-digimon/${id}`, body)
      .then(res => {
        this.setState({ myDigimon: res.data })
      })
      .catch(error => console.log(error))
  }

  releaseDigimon = (id) => {
    axios.delete(`/api/my-digimon/${id}`)
      .then(res => {
        this.setState({ myDigimon: res.data })
      })
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.myDigimon)
    return (
      <div className="App">
        <header />
        <Finder catchFn={this.catchDigimon} />
        <Digivice myDigimon={this.state.myDigimon} nameFn={this.editName} releaseFn={this.releaseDigimon} />
      </div>
    )
  }
}


export default App;
