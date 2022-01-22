import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,  //{[id]: 'success' 'error'}
        quiz: [
            {
                question: 'Is Tashkent big city in the world?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    { text: 'Yes', id: 1 },
                    { text: 'I dont know', id: 2 },
                    { text: 'No', id: 3 },
                    { text: 'Some', id: 4 },
                ]
            },
            {
                question: 'When found America?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    { text: '1990', id: 1 },
                    { text: '1492', id: 2 },
                    { text: '1400', id: 3 },
                    { text: '1501', id: 4 },
                ]
            }
        ]
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]  // object ichidaga index kalitni topib beradi
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]  // object // 2 / 1 / 2
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success' //{ 3: 'success', 2: 'success'}
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
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
        }
        else {
            // console.log(false); 
            results[question.id] = 'error' // {4: 'error', 1: 'error'}
            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Check all answers</h1>
                    {
                        this.state.isFinished
                            ?
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
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
