import React, { Component, Fragment } from 'react';
import Category from './gameScreen/Category';
import Question from './gameScreen/Question';
import Answers from './gameScreen/Answers';
// import Button from './gameScreen/Button';
import Badges from './gameScreen/Badges';
import Spinner from './Spinner';
import Greeting from './Greeting';

const API = "https://opentdb.com/api.php?amount=1";

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            answer: '',
            correctAnswersAmount: 0,
            incorrectAnswersAmount: 0
        };
        this.answerInformation = this.answerInformation.bind(this);
    }

    answerInformation = (userAnswer) => {
        let { correctAnswersAmount, incorrectAnswersAmount } = this.state;
        const { correct_answer } = this.state.data;
        if (userAnswer === correct_answer) {
            correctAnswersAmount = correctAnswersAmount + 1
        }
        else {
            incorrectAnswersAmount = incorrectAnswersAmount + 1
        }
		this.setState({
            answer: userAnswer,
            correctAnswersAmount,
            incorrectAnswersAmount
        });
        this.getQuestion();
    };

    getQuestion() {
        this.setState({ isLoading: true })
        fetch(API)
        .then(response => response.json())
        .then(data => {
            let answers = data.results[0].incorrect_answers;
            answers.splice(Math.floor(Math.random() * 3), 0, data.results[0].correct_answer);
            this.setState({
                 data: data.results[0],
                 isLoading: false,
                 answers 
                })
            })
    }


    componentDidMount() {
        this.getQuestion();
    }

    render() {
        const {category, question, correct_answer} = this.state.data;
        const {isLoading, answers, correctAnswersAmount, incorrectAnswersAmount} = this.state;
        const {name} = this.props;
        console.log(correctAnswersAmount, incorrectAnswersAmount)
        if (isLoading) {
            return(
                <Spinner />
            )
        }
        return(
            <Fragment >
                <Greeting name={name} />
                <div className="game-header-container game-header-flex">
                    <Category value={ category } />
                    <Badges correctAnswersAmount={correctAnswersAmount} incorrectAnswersAmount={incorrectAnswersAmount} />
                </div>
                <Question question={question} />
                <Answers answerInformation={this.answerInformation} correctAnswer={correct_answer} answers={answers || []} />
                {/* <div className="buttons-container buttons-flex">
                    <Button id={"check-button"} class={"check__button"} value={"Check"}/>
                    <Button id={"clear-button"} class={"clear__button"} value={"Clear Results"}/>
                </div> */}
            </Fragment>
        )
    }
}

export default GameBoard;