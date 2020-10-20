import { connect } from 'react-redux';
import CommentEditForm from './comment_edit_form';
import { removeCommentErrors, updateComment } from '../../actions/comment_actions';
import { requestQuestions } from "../../actions/question_actions";

const mapStateToProps = (state, { match }) => ({
    author_id: state.session.currentUser.id,
    comment_errors: state.errors.comment,
    currentQuestion: parseInt(match.params.id),
    currentComment: parseInt(match.params.commentId),
})

const mapDispatchToProps = (dispatch) => ({
    sendComment: (comment) => dispatch(updateComment(comment)),
    removeCommentErrors: () => dispatch(removeCommentErrors()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentEditForm);
