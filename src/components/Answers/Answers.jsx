import React, {Component} from 'react';
// import Answer from './Answer';

class Answers extends Component {

    state = {
        selectedOption: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();

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
                    {
                        answers[2] ? 
                        <div className={selectedOption === answers[2] ? "answer active" : "answer"}>
                            <label>
                                <input className="radio__input" type="radio" value={answers[2]}
                                            checked={selectedOption === answers[2]} 
                                            onChange={this.handleOptionChange} />
                                {answers[2]}
                            </label>
                        </div> : null
                    }
                    {
                        answers[3] ? 
                        <div className={selectedOption === answers[3] ? "answer active" : "answer"}>
                        <label>
                            <input type="radio" className="radio__input" value={answers[3]} 
                                        checked={selectedOption === answers[3]} 
                                        onChange={this.handleOptionChange} />
                            {answers[3]}
                        </label>
                    </div> : null
                }
                </div>
                <div className="buttons-container buttons-flex">
                    <button id="check-button" className="check__button button-primary" type="submit" disabled={this.validateForm()} >Check</button>
                </div> 
            </form>
        )
    }
}

export default Answers;