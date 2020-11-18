import { connect } from 'react-redux';
import ReplyEditForm from './reply_edit_form';
import { removeReplyErrors, updateReply } from '../../actions/reply_actions';
import { fetchComment } from "../../actions/comment_actions";

const mapStateToProps = (state, { match }) => ({
    author_id: state.session.currentUser.id,
    reply_errors: state.errors.reply,
    currentQuestion: parseInt(match.params.id),
    currentComment: parseInt(match.params.commentId),
    currentReply: parseInt(match.params.replyId),
})

const mapDispatchToProps = (dispatch) => ({
  fetchComment: (commentId) => dispatch(fetchComment(commentId)),
  sendReply: (reply) => dispatch(updateReply(reply)),
  removeReplyErrors: () => dispatch(removeReplyErrors()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReplyEditForm);
