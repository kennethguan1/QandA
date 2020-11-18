import { connect } from 'react-redux';
import CommentShow from './comment_show';

import { deleteComment, fetchComment } from '../../actions/comment_actions';
import { fetchQuestion } from '../../actions/question_actions';
import { deleteReply } from '../../actions/reply_actions';
import { likePost, unlikePost } from '../../actions/like_actions';

const mapStateToProps = (state, { match }) => ({
  commentId: parseInt(match.params.commentId),
  currentUser: state.session.currentUser,
  questionId: parseInt(match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  fetchComment: (commentId) => dispatch(fetchComment(commentId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  deleteReply: (replyId) => dispatch(deleteReply(replyId)),
  likePost: (commentId, userId) => dispatch(likePost(commentId, userId)),
  unlikePost: (commentId) => dispatch(unlikePost(commentId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentShow);