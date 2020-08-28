import { connect } from 'react-redux';
import QuestionIndex from './question_index';

import { requestQuestions, deleteQuestion } from '../../actions/question_actions';

const mapStateToProps = state => ({
    questions: state.entities.questions,
    currentUser: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
    getQuestions: () => dispatch(requestQuestions()),
    deleteQuestion: question => dispatch(deleteQuestion(question)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionIndex);
