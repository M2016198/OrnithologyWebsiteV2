import { User } from 'oidc-client'
//import React, { Component } from 'react'
import { QuizData } from './QuizData'
import './styles.css'
import fetch from 'node-fetch';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export class Quiz extends Component {



    //variable to hold user answer etc
    //constructor(props) {
    //    super(props)

    //    this.state = {
    //        userAnswer: null,    //current users answer
    //        currentIndex: 0,  //current questions index
    //        options: [],       //the four options
    //        quizEnd: false, //True if it's the last question
    //        score: 0,      //the Score
    //        disabled: true,
    //    }
    //}



    //load up first quiz from quiz data
    loadQuiz = () => {

        // TODO: get birds from endpoint
        //const birdList = [];

        //let response = fetch('https://localhost:44379/birdquiz');
        fetch('https://localhost:44379/birdquiz')
            .then(response => {
                response.json().then(data => {
                    //const birds = data.filter(word => word.length > 6);
                    const bird = data[1];

                    fetch('https://localhost:44379/statusQuestion',
                        {
                            method: 'POST',
                            body: JSON.stringify(bird),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(response => {
                            response.json().then(data => {
                                const question = data;
                                const correctAnswer = question.answers.filter(answer => answer.isCorrect)[0];

                                const { currentIndex } = this.state;
                                this.setState(() => {
                                    return {
                                        question: question.question,
                                        //options: question.answers,
                                        answer: correctAnswer,
                                    }
                                });

                            })
                        })
                })
            });



        const homepage = () => {
            let restaurants = this.loadQuiz()
        }
        return (
            renderRestaurants(restaurants)
        )
    }


    // TODO: for each questions, find appropriate bird list and put in as options

    //const { currentIndex } = this.state;
    //this.setState(() => {
    //    return {
    //        question: QuizData[currentIndex].question,
    //        options: QuizData[currentIndex].options,
    //        answer: QuizData[currentIndex].answer,
    //    }
    //});
    //}


    //next question
    //nextQuestionHandler = () => {
    //    const { userAnswer, answer, score } = this.state

    //    //check answer for correctnessand +1 to score
    //    if (userAnswer === answer) {
    //        this.setState({
    //            score: score + 1
    //        })
    //    }


    //    this.setState({
    //        currentIndex: this.state.currentIndex + 1,
    //        userAnswer: null
    //    })
    //}

    //need to call LoadQuiz function
    //componentDidMount() {
    //    this.loadQuiz();
    //}

    //check if answer is correct
    //checkAnswer = answer => {
    //    this.setState({
    //        userAnswer: answer,
    //        disabled: false
    //    })
    //}

    //need to disable other options when one is selected
    //componentDidUpdate(prevProps, prevState) {
    //    const { currentIndex } = this.state;
    //    if (this.state.currentIndex != prevState.currentIndex) {
    //        this.setState(() => {
    //            return {
    //                question: QuizData[currentIndex].question,
    //                options: QuizData[currentIndex].options,
    //                answer: QuizData[currentIndex].answer,
    //            }
    //        }
    //        );
    //    }
    //}

    //Finish quiz handler
    //finishHandler = () => {

    //    const { userAnswer, answer, score } = this.state

    //    if (userAnswer === answer) {
    //        this.setState({
    //            score: score + 1
    //        })
    //    }

    //    if (this.state.currentIndex === QuizData.length - 1) {
    //        this.setState({
    //            quizEnd: true
    //        })
    //    }

    //}


    //display the question on the HTML page
    //render() {
    //    const { question, options, currentIndex, userAnswer, quizEnd } = this.state

    //    if (quizEnd) {
    //        return (
    //            <div>
    //                <h1> Game over. Final score is {this.state.score} points</h1>
    //                <p> The correct answers for the quiz are:</p>
    //                <ul>
    //                    {QuizData.map((item, index) => (
    //                        <li className='options'
    //                            key={index}>
    //                            {item.answer}
    //                        </li>
    //                    ))}
    //                </ul>
    //            </div >
    //        )
    //    }



    //        return (
    //            <div>
    //                {/*header Questions*/}
    //                <h2>{question}</h2>
    //                {/*display what number questions it is and allow user to select answer/check answer*/}
    //                <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span>
    //                {
    //                    options.map(option =>
    //                        <p key={option.id} className={`options ${userAnswer === option ? "selected" : null}`}
    //                            onClick={() => this.checkAnswer(option)}
    //                        >
    //                            {option}
    //                        </p>
    //                    )
    //                }


    //                {currentIndex < QuizData.length - 1 &&
    //                    <button disabled={this.state.disabled} onClick={this.nextQuestionHandler}>
    //                        Next Question
    //                    </button>}

    //                {currentIndex === QuizData.length - 1 &&
    //                    <button onClick={this.finishHandler} disabled={this.state.disabled}>
    //                        Finish Quiz
    //                </button>}

    //            </div>
    //        )
    //    }
}

export default Quiz