import React from 'react';
import classes from './input.module.css'
const Input = props => {
    function isInvalid({ valid, touched, shouldValidate }) {
        return !valid && shouldValidate && touched
    }
    const InputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${InputType}-${Math.random()}`
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={InputType} id={htmlFor} value={props.value} onChange={props.onChange} />

            {isInvalid(props)
                ? <span>{props.errorMessage || "Введите"}</span>
                : null
            }



            <span>{props.errorMessage}</span>
        </div>
    )
}
export default Input