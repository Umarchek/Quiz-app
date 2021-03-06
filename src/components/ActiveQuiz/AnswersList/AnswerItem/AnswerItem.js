import React from "react";
import classes from './AnswerItem.module.css'

const AnswerItem = props => {
    const cls = [classes.AnswerItem]

    if (props.state) {
        console.log(props.state);
        cls.push(classes[props.state])
        console.log(cls);
    }
    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem