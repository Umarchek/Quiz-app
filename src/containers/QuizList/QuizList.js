import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './QuizList.module.css'
export default class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <Link to={'/quiz/' + quiz}>
            Тест {quiz}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>

      </div>)
  }
}
