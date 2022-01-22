import React, { Component } from 'react';
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/input/input';
export default class Auth extends Component {
    sumbitHandler() {

    }
    loginHandler() {

    }
    registerHandler() {

    }
    render() {
        return (
            <div className={classes.Auth}>

                <div>
                    <h1>Авризация</h1>
                    <form onSubmit={this.sumbitHandler} className={classes.AuthForm} action="">
                        <Input label="Почта" InputType="Email"></Input>
                        <Input label="Пароль" InputTypeInputType="password"></Input>
                        <Button type='success' onClick={this.loginHandler}>Войти</Button>
                        <Button type='primary' onClick={this.registerHandler}>Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}
