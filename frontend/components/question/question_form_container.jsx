import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { removeQuestionErrors, createQuestion } from '../../actions/question_actions';

const mapStateToProps = (state) => ({
    author_id: state.session.currentUser.id,
    question_errors: state.errors.question,

})

const mapDispatchToProps = (dispatch) => ({
    sendQuestion: (question) => dispatch(createQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionForm);
