import React from 'react';
import Quiz from './Quiz';
import { useParams } from 'react-router-dom';
export const QuizCb = () => {
    return (
        <Quiz params={useParams} />)
};
export default QuizCb