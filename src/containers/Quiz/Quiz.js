import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz.js'

export class Quiz extends Component {
    state = {
        results: {}, //{[id]}: success error
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        quiz: [
            {
                question: 'What are two things you can never eat for breakfast?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    { text: 'Lunch and Dinner', id: 1 },
                    { text: 'Lunch', id: 2 },
                    { text: 'Dinner', id: 3 },
                    { text: 'I don`t know', id: 4 },
                ]
            },
            {
                question: 'What is always coming but never arrives?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    { text: 'Numbrix', id: 1 },
                    { text: 'Tomorrow', id: 2 },
                    { text: 'Arrive', id: 3 },
                    { text: 'I don`t know', id: 4 },
                ]
            },
            {
                question: 'What gets wetter the more it dries?',
                rightAnswerId: 3,
                id: 3,
                answers: [
                    { text: 'Feeling Blue', id: 1 },
                    { text: 'Week', id: 2 },
                    { text: 'A towel', id: 3 },
                    { text: 'I don`t know', id: 4 },
                ]
            },
            {
                question: 'What can be broken but never held?',
                rightAnswerId: 1,
                id: 4,
                answers: [
                    { text: 'A promise', id: 1 },
                    { text: 'Massive', id: 2 },
                    { text: 'Decide', id: 3 },
                    { text: 'I don`t know', id: 4 },
                ]
            },
            {
                question: 'What word is spelled incorrectly in every single dictionary?',
                rightAnswerId: 2,
                id: 5,
                answers: [
                    { text: 'Finale', id: 1 },
                    { text: 'Incorrectly', id: 2 },
                    { text: 'Watch', id: 3 },
                    { text: 'I don`t know', id: 4 },
                ]
            }
        ]
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onAnswerClickHandler = answerId => {
        // console.log('Answer id: ', answerId);
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }



        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results
        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = "success"
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results
            })


            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    // console.log("finished");
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = "error"
            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }
    }
    retryHandler = () => {
        this.setState({
            results: {}, //{[id]}: success error
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>

                    {this.state.isFinished
                        ? <FinishedQuiz results={this.state.results} quiz={this.state.quiz} onRetry={this.retryHandler} />
                        :
                        <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                    
                </div>
            </div>
        )
    }
}

export default Quiz