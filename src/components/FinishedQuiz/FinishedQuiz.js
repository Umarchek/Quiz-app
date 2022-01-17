import React from 'react'
import classes from './FinishedQuiz.module.css'
const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]

                    return (
                        <li key={index}>
                            <strong>
                                {index + 1}. &nbsp;
                            </strong>
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}

            </ul>
            <p>Correct {successCount} out of {props.quiz.length}</p>
            <div><button onClick={props.onRetry}>Restart</button></div>
        </div>
    )
}
export default FinishedQuiz