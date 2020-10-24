import { connect } from 'react-redux';
import QuestionEditForm from './question_edit_form';
import { removeQuestionErrors, updateQuestion, deleteQuestion, fetchQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, { match }) => ({
    question_errors: state.errors.question,
    questionId: parseInt(match.params.id),

})

const mapDispatchToProps = (dispatch) => ({
  sendQuestion: (question) => dispatch(updateQuestion(question)),
  removeQuestionErrors: () => dispatch(removeQuestionErrors()),
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionEditForm);