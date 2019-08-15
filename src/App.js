import React, { Component, Fragment} from 'react';
import './normalize.css';
import './skeleton.css';
import Spinner from './components/Spinner';
import Form from './components/Form';
import GameBoard from './components/Game';
import Results from './components/Results';

class App extends Component {

  state = {
    loading: true
  }

  render() {
    const {loading} = this.state;

    let component;


        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 3000);

    if (loading) {
      // component  = <Spinner />;
      component  = <Form />;
    }
    else {
      component = <GameBoard />
    }
    return (
      <Fragment>
        <div>{component}</div>
        <Results correct={7} uncorrect={3} position={3} />
        <Spinner />
      </Fragment>
    )
  }

}

export default App;
