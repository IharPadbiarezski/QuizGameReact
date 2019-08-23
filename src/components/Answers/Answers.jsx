import React, {Component} from 'react';
import Answer from '../Answer';
import './Answers.css';
import LabelledInput from '../LabelledInput/';

class Answers extends Component {

    state = {
        selectedOption: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.answerInformation(this.state.selectedOption);
    }

    handleOptionChange = (event) => {
        this.setState({
          selectedOption: event.target.value,
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
                    {
                        answers[0] ? 
                        <Answer
                            selectedOption={ selectedOption }
                            answer={ answers[0] }
                            onChange={ this.handleOptionChange }
                        /> : null
                    }
                    {
                        answers[1] ? 
                        <Answer
                            selectedOption={ selectedOption }
                            answer={ answers[1] }
                            onChange={ this.handleOptionChange }
                        /> : null
                    }
                    {
                        answers[2] ? 
                        <Answer selectedOption={ selectedOption }
                        answer={ answers[2] }
                        onChange={ this.handleOptionChange }
                        /> : null
                    }
                    {
                        answers[3] ? <Answer
                            selectedOption={ selectedOption }
                            answer={ answers[3] }
                            onChange={ this.handleOptionChange }
                            /> : null
                }
                </div>
                <div className="buttons-container buttons-flex">
                    <LabelledInput
                        id="check-button"
                        className="check__button button-primary"
                        type="submit"
                        disabled={this.validateForm()}
                        defaultValue="Check"
                    />
                </div> 
            </form>
        )
    }
}

export default Answers;