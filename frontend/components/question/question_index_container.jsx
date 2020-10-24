import { connect } from 'react-redux';
import QuestionIndex from './question_index';

import { fetchQuestions, deleteQuestion } from "../../actions/question_actions";

const mapStateToProps = (state) => ({
  questions: state.entities.questions,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionIndex);
