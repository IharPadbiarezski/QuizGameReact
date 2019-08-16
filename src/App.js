import React, { Component, Fragment} from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import GameBoard from './components/Game';
import Results from './components/Results';
import StorageForMany from './localStorageForMany';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
      completed: false,
      name: '',
      email: '',
      correctAnswersAmount: '',
      incorrectAnswersAmount: ''
    }

    this.startGame = this.startGame.bind(this);
  }

  userInformation = (name, email) => {
		this.setState({
        isUser: true,
        name,
        email
			});
  };
  
  gameInformation = (correctAnswersAmount, incorrectAnswersAmount) => {
		this.setState({
        completed: true,
        correctAnswersAmount,
        incorrectAnswersAmount
			});
  };
  
  startGame = () => {
    this.setState({
      completed: false
    })
  }

  render() {
    const {isUser, completed, correctAnswersAmount, incorrectAnswersAmount, name} = this.state;

    let component;

    if (!isUser) {
      component  = <Form userInformation={this.userInformation} />;
    }
    else if (isUser && !completed) {
      const {name} = this.state;
      component = <GameBoard gameInformation={this.gameInformation} name={name} />
    }
    else {
      component = <div className="results-container">
          <Results correct={correctAnswersAmount} incorrect={incorrectAnswersAmount} name={name} position={StorageForMany.getPositionLocalStorage("results", name)} />
          <button id="start-button" onClick={this.startGame} className="start__button">Start Again</button>
        </div>
    }
    return (
      <Fragment>
        <div>{component}</div>
      </Fragment>
    )
  }

}

export default App;
