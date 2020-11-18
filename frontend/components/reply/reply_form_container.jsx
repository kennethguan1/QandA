import { connect } from 'react-redux';
import ReplyForm from './reply_form';
import { removeReplyErrors, createReply } from '../../actions/reply_actions';

const mapStateToProps = (state, { match }) => ({
    author_id: state.session.currentUser.id,
    reply_errors: state.errors.reply,
    currentComment: parseInt(match.params.commentId),
})

const mapDispatchToProps = (dispatch) => ({
    sendReply: (reply) => dispatch(createReply(reply)),
    removeReplyErrors: () => dispatch(removeReplyErrors()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReplyForm);
