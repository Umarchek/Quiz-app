import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'
const ActiveQuiz = (props) => (

    <div className={classes.ActiveQuiz}>

        <div>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
            </p>
            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}

            />
        </div>

        <div style={{ marginTop: "50px" }}><button onClick={props.onRetry}><i className="fa fa-redo" /></button></div>

    </div >

)
export default ActiveQuiz
