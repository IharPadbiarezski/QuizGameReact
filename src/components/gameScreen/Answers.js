import React, {Component} from 'react';
// import Answer from './Answer';

class Answers extends Component {

    state = {
        selectedOption: ''
    }

	// handleChange = (e) => {
	// 	const { name, value } = e.target;

	// 	this.setState({
	// 		[name]: value
	// 	});
	// };

	// validateForm = () => {
	// 	const { name, email } = this.state;

	// 	const notValid = !name && !email;

	// 	return notValid;
	// };

    handleSubmit = (event) => {
        event.preventDefault();
      
        console.log('You have selected:', this.state.selectedOption);
        this.props.answerInformation(this.state.selectedOption);
    }

    handleOptionChange = (event) => {
        this.setState({
          selectedOption: event.target.value
        });
    }

    validateForm = () => {
		const { selectedOption } = this.state;

		const notValid = !selectedOption;

		return notValid;
	};

    render() {
        const { answers } = this.props;
        const { selectedOption } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="answers-container answers">
                    <div className={selectedOption === answers[0] ? "answer active" : "answer"}>
                        <label>
                            <input type="radio" className="radio__input" value={answers[0]} 
                                        checked={selectedOption === answers[0]} 
                                        onChange={this.handleOptionChange} />
                            {answers[0]}
                        </label>
                    </div>
                    <div className={selectedOption === answers[1] ? "answer active" : "answer"}>
                        <label>
                            <input type="radio" className="radio__input" value={answers[1]} 
                                        checked={selectedOption === answers[1]} 
                                        onChange={this.handleOptionChange} />
                            {answers[1]}
                        </label>
                    </div>
                    <div className={selectedOption === answers[2] ? "answer active" : "answer"}>
                        <label>
                            <input className="radio__input" type="radio" value={answers[2]}
                                        checked={selectedOption === answers[2]} 
                                        onChange={this.handleOptionChange} />
                            {answers[2]}
                        </label>
                    </div>
                    <div className={selectedOption === answers[3] ? "answer active" : "answer"}>
                        <label>
                            <input type="radio" className="radio__input" value={answers[3]} 
                                        checked={selectedOption === answers[3]} 
                                        onChange={this.handleOptionChange} />
                            {answers[3]}
                        </label>
                    </div>
                </div>
                <div className="buttons-container buttons-flex">
                    <button id="check-button" className="check__button button-primary" type="submit" disabled={this.validateForm()} >Check</button>
                    <button id="clear-button" className="clear__button">Clear Results</button>
                </div> 
            </form>
        )
    }
    // state = {
    //     answer: '',
    //     answer2: ''
    // }

    // answerInformation = (active, answer2) => {
    //     this.setState({
    //         answer2: answer2
    //     })
    //     console.log(this.state.answer2)
    // }
    
    
    // render() {
    //     const {answers} = this.props;
    //     return(
    //         <div>
    //         <ul className="answers-container answers">
    //             <Answer answerInformation={this.answerInformation} answer={answers[0]} />
    //             <Answer answerInformation={this.answerInformation} answer={answers[1]} />
    //             <Answer answerInformation={this.answerInformation} answer={answers[2]} />
    //             <Answer answerInformation={this.answerInformation} answer={answers[3]} />
    //         </ul>
    //         <p>{this.state.answer}</p>
    //         </div>

    //     )
    // }
}

export default Answers;