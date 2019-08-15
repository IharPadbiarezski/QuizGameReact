import React, { Component, Fragment } from 'react';
import Category from './gameScreen/Category';
import Question from './gameScreen/Question';
import Answers from './gameScreen/Answers';
import Button from './gameScreen/Button';
import Badges from './gameScreen/Badges';

class GameBoard extends Component {
    state = {
        correctCount: '',
        uncorrectCount: ''
    }

    render() {
        return(
            <Fragment>
                <div className="game-header-container game-header-flex">
                    <Category value="Life style" />
                    <Badges />
                </div>
                <Question />
                <Answers />
                <div className="buttons-container buttons-flex">
                    <Button id={"check-button"} class={"check__button"} value={"Check"}/>
                    <Button id={"clear-button"} class={"clear__button"} value={"Clear Results"}/>
                </div>
            </Fragment>
        )
    }
}

export default GameBoard;