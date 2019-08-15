import React, { Component, Fragment} from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import GameBoard from './components/Game';
import Results from './components/Results';

class App extends Component {

  state = {
    isUser: false,
    complited: false,
    name: '',
    email: ''
  }

  userInformation = (name, email) => {
		this.setState({
        isUser: true,
        name,
        email
			});
	};

  render() {
    const {isUser, complited} = this.state;

    let component;

    if (!isUser) {
      component  = <Form userInformation={this.userInformation} />;
    }
    else if (isUser && !complited) {
      const {name} = this.state;
      component = <GameBoard name={name} />
    }
    else {
      component = <Results correct={7} uncorrect={3} position={3} />
    }
    return (
      <Fragment>
        <div>{component}</div>
      </Fragment>
    )
  }

}

export default App;
