import React from 'react';
import './App.css';

import Header from './components/Header'
import CardContainer from './components/CardContainer'

class App extends React.Component {
  state = {
    triviaQuestions: []
  }

  componentDidMount() {
    fetch('http://jservice.io/api/clues')
      .then(response => response.json())
      .then(triviaQuestions => this.setState({ triviaQuestions }));
  }

  render() {

    return (
      <div className="App" >
        <Header />
        <CardContainer triviaQuestions={this.state.triviaQuestions} />
      </div>
    );
  }
}

export default App;
