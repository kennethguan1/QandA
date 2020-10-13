import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { removeCommentErrors, createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, { match }) => ({
    author_id: state.session.currentUser.id,
    comment_errors: state.errors.comment,
    currentQuestion: parseInt(match.params.id),
})

const mapDispatchToProps = (dispatch) => ({
    sendComment: (comment) => dispatch(createComment(comment)),
    removeCommentErrors: () => dispatch(removeCommentErrors()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm);
