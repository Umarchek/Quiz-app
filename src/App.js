import Layout from "./hoc/Layout/Layout";
import { Route, Routes } from 'react-router-dom'
import Quiz from "./containers/Quiz/QuizCb";
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/quiz-creater" element={<QuizCreator />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/" element={<QuizList />} />
      </Routes>
    </Layout>
  );
}

export default App;
