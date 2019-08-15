import React, { Component, Fragment} from 'react';
import './normalize.css';
import './skeleton.css';
import Spinner from './components/Spinner';
import Form from './components/Form';
import GameBoard from './components/Game';

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
        {/* <Form /> */}
      </Fragment>
    )
  }
  
	// state = {
	// 	total: '',
	// 	amount: '',
	// 	term: '',
	// 	loading: false
	// };

	// loanInformation = (amount, term) => {
	// 	// const total = calculateTotal(amount, term);

	// 	this.setState(
	// 		{
	// 			loading: true
	// 		},
	// 		() => {
	// 			setTimeout(() => {
	// 				this.setState({
	// 					amount,
	// 					total,
	// 					term,
	// 					loading: false
	// 				});
	// 			}, 3000);
	// 		},
	// 		() => {
	// 			setTimeout(() => {
	// 				this.setState({
	// 					amount: "",
	// 					total: "",
	// 					term: "",
	// 					loading: false
	// 				});
	// 			}, 6000);
	// 		},
	// 	);
	// };

	// render() {
	// 	// destructuring the state
	// 	const { term, amount, total, loading } = this.state;

	// 	// Conditionaly Render a Component

	// 	let component;
	// 	if (total === '' && !loading) {
	// 		component = <Message />;
	// 	} else if (loading) {
	// 		component = <Spinner />;
	// 	} else {
	// 		component = <Result total={total} amount={amount} term={term} />;
	// 	}
	// 	return (
	// 		<Fragment>
	// 			<h1>Loan Calculator</h1>

	// 			<div className="container">
	// 				<Form loanInformation={this.loanInformation} />

	// 				<div className="messages">{component}</div>
	// 			</div>
	// 		</Fragment>
	// 	);
	// }
}

export default App;
